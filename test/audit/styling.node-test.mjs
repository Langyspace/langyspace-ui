import assert from 'node:assert/strict'
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createHash } from 'node:crypto'
import test from 'node:test'
import { inspectStylingSource } from '../../audit/styling-source.mjs'
import { inspectStylingHtml } from '../../audit/styling-html.mjs'
import { auditStyling } from '../../audit/styling.mjs'
import { auditArchitecture } from '../../audit/index.mjs'

const ids = (source, file = 'src/Example.tsx') =>
  inspectStylingSource(source, file).map((failure) => failure.ruleId)
const hash = (value) => createHash('sha256').update(value).digest('hex')

test('tagged presentation, custom properties, DOM reads and ordinary style data are allowed', () => {
  const source = [
    "import { styled, createGlobalStyle } from 'styled-components'",
    "import '@fontsource/montserrat/latin-400.css'",
    'const Line = styled.div`width: ${p => p.$width}; --progress: ${p => p.$progress};`',
    'const Position = createGlobalStyle`[data-tooltip="${p => p.$id}"] { left: ${p => p.$left}px; }`',
    'const original = document.body.style.overflow',
    "const theme = { style: { normal: 'normal', italic: 'italic' } }",
    'const page = <><Line $width="1rem" />{/* <div style={{height: 2}}/> */}</>',
  ].join('\n')
  assert.deepEqual(ids(source), [])
})

test('static, dynamic and CommonJS stylesheet imports cannot evade the styling owner', () => {
  for (const source of [
    "import './own.css'",
    "export * from './own.scss'",
    "import('./own.sass')",
    "require('./own.less')",
    "import '@fontsource/montserrat/../../own.css'",
    "import '@emotion/styled'",
  ])
    assert(ids(source).includes('LSSTYLE001'), source)
})

test('JSX, attrs callbacks and local props factories are checked at their actual sinks', () => {
  for (const source of [
    'const x = <div style={{height:2}}/>',
    'const x = styled.div.attrs({style:{height:2}})``',
    'const x = styled.div.attrs(p => ({style: {left:p.$left}}))``',
    'const makeProps = p => ({style:p}); const x = styled.div.attrs(p => makeProps(p))``',
    'const a = {style: foo}; const b = a; const x = <span {...b}/>',
    "const p = () => ({style: foo}); React.createElement('span',p())",
  ])
    assert(ids(source).includes('LSSTYLE002'), source)
})

test('DOM CSS writes, literal indexing, aliases and insertion are blocked; reads remain valid', () => {
  for (const source of [
    "body.style.overflow = 'hidden'",
    "body['style']['overflow'] = 'hidden'",
    "const css = body.style; css.height = '0px'",
    "body.style.setProperty('--x','2px')",
    "Object.assign(body.style, {position:'fixed'})",
    "body.setAttribute('style','opacity:0')",
  ])
    assert(ids(source).includes('LSSTYLE003'), source)
  for (const source of [
    "document.createElement('style')",
    '<style>{css}</style>',
    "sheet.insertRule('body{}')",
    'new CSSStyleSheet()',
  ])
    assert(ids(source).includes('LSSTYLE004'), source)
})

test('HTML parser respects comments/quoted boundaries, inspects inline JS and preserves line offsets', () => {
  assert.deepEqual(
    inspectStylingHtml(
      '<!-- <style>body{}</style> --><script type="application/ld+json">{"text":"<style>"}</script>',
      'index.html',
    ),
    [],
  )
  const source =
    '<!doctype html>\n<img alt="a > b" style="display:none">\n<script>document.body.style.height="2px"</script>\n<link rel="stylesheet" href="own.css">'
  const found = inspectStylingHtml(source, 'index.html')
  assert.deepEqual(
    found.map((row) => row.ruleId),
    ['LSSTYLE002', 'LSSTYLE003', 'LSSTYLE001'],
  )
  assert.deepEqual(
    found.map((row) => source.slice(0, row.offset).split('\n').length),
    [2, 3, 4],
  )
})

test('owned public/HTML/CSS files are audited and generated assets require exact provenance and bytes', async () => {
  const root = await mkdtemp(join(tmpdir(), 'langy-styling-'))
  try {
    await mkdir(join(root, 'src'))
    await mkdir(join(root, 'public'))
    await writeFile(join(root, 'src/Good.tsx'), 'const v = <div/>')
    await writeFile(join(root, 'public/own.css'), 'body {color: red}')
    await writeFile(join(root, 'index.html'), '<style>body {color:red}</style>')
    const initial = await auditStyling({ root })
    assert.deepEqual(initial.failures.map((row) => row.ruleId).sort(), [
      'LSSTYLE001',
      'LSSTYLE004',
    ])
    await rm(join(root, 'public/own.css'))
    await writeFile(join(root, 'index.html'), '<div id="root"></div>')
    const bundle =
      "document.createElement('style') // generated styled-components runtime"
    await writeFile(join(root, 'public/app.js'), bundle)
    const manifest = {
      sourceRepository: 'Langyspace/lab',
      sourceCommit: 'a'.repeat(40),
      styling: {
        engine: 'styled-components',
        policyVersion: 1,
        violations: 0,
        sourceManifestSha256: 'b'.repeat(64),
      },
      files: { 'app.js': hash(bundle) },
    }
    const bytes = JSON.stringify(manifest)
    await writeFile(join(root, 'public/manifest.json'), bytes)
    const declaration = {
      manifest: 'public/manifest.json',
      sourceRepository: manifest.sourceRepository,
      sourceCommit: manifest.sourceCommit,
      manifestSha256: hash(bytes),
    }
    const config = { root, generatedAssets: [declaration] }
    assert.equal((await auditStyling(config)).failures.length, 0)
    await assert.rejects(
      auditStyling({
        ...config,
        generatedAssets: [{ ...declaration, manifestSha256: 'c'.repeat(64) }],
      }),
      /provenance/,
    )
    await writeFile(join(root, 'public/app.js'), bundle + '\n// changed')
    await assert.rejects(auditStyling(config), /hash_mismatch/)
    await assert.rejects(
      auditStyling({ ...config, sourceRoots: ['../elsewhere'] }),
      /outside_root/,
    )
    await assert.rejects(auditStyling({ root, sourceRoots: [] }), /scope_empty/)
    const cssBundle = 'body {color:red}'
    await writeFile(join(root, 'public/UPPER.CSS'), cssBundle)
    const cssManifest = {
      ...manifest,
      files: { 'UPPER.CSS': hash(cssBundle) },
    }
    const cssBytes = JSON.stringify(cssManifest)
    await writeFile(join(root, 'public/manifest.json'), cssBytes)
    await assert.rejects(
      auditStyling({
        root,
        generatedAssets: [{ ...declaration, manifestSha256: hash(cssBytes) }],
      }),
      /plain_stylesheet_forbidden/,
    )
  } finally {
    await rm(root, { recursive: true, force: true })
  }
})

test('Node module extensions retain architecture motion ownership', async () => {
  const root = await mkdtemp(join(tmpdir(), 'langy-node-motion-'))
  const paths = ['mjs', 'cjs', 'mts', 'cts'].map(
    (extension) => `src/pulse.${extension}`,
  )
  try {
    await mkdir(join(root, 'src'))
    for (const path of paths)
      await writeFile(
        join(root, path),
        'const pulse = keyframes`to {opacity:1;}`',
      )
    const initial = await auditArchitecture({ root })
    assert.equal(
      initial.diagnostics.filter((row) => row.message === 'unclassified motion')
        .length,
      4,
    )
    const classified = await auditArchitecture({
      root,
      requireExceptionExpiry: true,
      today: '2026-11-15',
      allowedDomainMotion: paths.map((path) => ({
        path,
        owner: 'Scheduling',
        reason: 'Existing availability pulse moved with its owner',
        expiresAt: '2027-11-01',
      })),
    })
    assert.deepEqual(classified.diagnostics, [])
  } finally {
    await rm(root, { recursive: true, force: true })
  }
})
