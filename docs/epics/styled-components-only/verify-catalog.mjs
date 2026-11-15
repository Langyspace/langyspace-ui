import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'
import { execFileSync } from 'node:child_process'
import { auditStyling } from '../../../audit/styling.mjs'
import { theme } from '../../../src/foundations/theme/theme.ts'
const base = '8aaa792d207507e07f00f17483e9c2e25845ac40'
const directory = 'docs/epics/styled-components-only/evidence'
const map = JSON.parse(
  fs.readFileSync(path.join(directory, 'catalog-conversion-map.json')),
).entries
const printer = ts.createPrinter({ removeComments: true })
const parse = (file, text) =>
  ts.createSourceFile(
    file,
    text,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith('tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  )
const canonical = (node) =>
  printer.printNode(ts.EmitHint.Unspecified, node, node.getSourceFile())
const jsxText = (text) => {
  const lines = text.split(/\r\n|\n|\r/)
  let last = 0
  lines.forEach((line, index) => {
    if (/[^ \t]/.test(line)) last = index
  })
  return lines
    .map((line, index) => {
      let value = line.replace(/\t/g, ' ')
      if (index !== 0) value = value.replace(/^ +/, '')
      if (index !== lines.length - 1) value = value.replace(/ +$/, '')
      return value ? value + (index !== last ? ' ' : '') : ''
    })
    .join('')
}
const normalize = (file, text, current) => {
  const entries = map.filter((e) => e.file === file),
    lookup = new Map(entries.map((e) => ['StoryLayout.' + e.name, e.tag])),
    aliases = new Set(entries.map((e) => e.alias).filter(Boolean))
  const source = parse(file, text)
  return ts.transform(source, [
    (context) => {
      const tag = (node) =>
        ts.factory.createIdentifier(
          lookup.get(node.getText(source)) ?? node.getText(source),
        )
      const attrs = (node) =>
        ts.factory.updateJsxAttributes(
          node,
          node.properties.filter(
            (n) => !ts.isJsxAttribute(n) || n.name.getText(source) !== 'style',
          ),
        )
      const visit = (node) => {
        if (ts.isImportDeclaration(node)) return undefined
        if (
          ts.isVariableStatement(node) &&
          node.declarationList.declarations.length === 1 &&
          aliases.has(node.declarationList.declarations[0].name.getText(source))
        )
          return undefined
        if (ts.isJsxText(node)) {
          const value = jsxText(node.text)
          return value ? ts.factory.createJsxText(value) : undefined
        }
        if (ts.isJsxOpeningElement(node))
          return ts.factory.updateJsxOpeningElement(
            node,
            current ? tag(node.tagName) : node.tagName,
            node.typeArguments,
            attrs(ts.visitEachChild(node.attributes, visit, context)),
          )
        if (ts.isJsxSelfClosingElement(node))
          return ts.factory.updateJsxSelfClosingElement(
            node,
            current ? tag(node.tagName) : node.tagName,
            node.typeArguments,
            attrs(ts.visitEachChild(node.attributes, visit, context)),
          )
        if (ts.isJsxClosingElement(node))
          return ts.factory.updateJsxClosingElement(
            node,
            current ? tag(node.tagName) : node.tagName,
          )
        return ts.visitEachChild(node, visit, context)
      }
      return (node) => ts.visitNode(node, visit)
    },
  ]).transformed[0]
}
assert.equal(map.length, 42)
for (const file of new Set(map.map((e) => e.file))) {
  const old = execFileSync('git', ['show', `${base}:${file}`], {
      encoding: 'utf8',
    }),
    current = fs.readFileSync(file, 'utf8')
  assert(
    canonical(normalize(file, old, false)) ===
      canonical(normalize(file, current, true)),
    `Catalog nonstyle JSX/logic changed: ${file}`,
  )
}
let declarations = 0,
  properties = 0
for (const file of new Set(map.map((e) => e.styleFile))) {
  const source = parse(file, fs.readFileSync(file, 'utf8'))
  const actual = new Map(
    source.statements
      .filter(ts.isVariableStatement)
      .flatMap((s) =>
        s.declarationList.declarations.map((d) => [
          d.name.getText(source),
          d.initializer,
        ]),
      ),
  )
  declarations += actual.size
  for (const entry of map.filter((e) => e.styleFile === file)) {
    const css =
      'const x=' +
      entry.target +
      '`\n  &&&& {\n' +
      entry.declarations
        .map((d) => '    ' + d.cssProperty + ': ' + d.cssValue + ';')
        .join('\n') +
      '\n  }\n`'
    const expected = parse('expected.ts', css).statements[0].declarationList
      .declarations[0].initializer
    assert.equal(
      canonical(actual.get(entry.name)),
      canonical(expected),
      `Catalog declaration changed: ${entry.name}`,
    )
    properties += entry.declarations.length
  }
}
assert.equal(theme.colors.palette.black.toLowerCase(), '#000000')
assert.equal(theme.colors.palette.white.toLowerCase(), '#ffffff')
assert.equal(theme.colors.palette.neutral[300].toLowerCase(), '#ececea')
assert.equal(
  theme.zIndex.overlay,
  800,
  'Existing layer order base must remain unchanged',
)
assert.equal(
  execFileSync(
    'git',
    [
      'diff',
      base,
      '--',
      'audit',
      'eslint',
      'package.json',
      'pnpm-lock.yaml',
      '.github',
      'src/index.ts',
      'src/form.ts',
      'quality',
      'LICENSE',
      'THIRD_PARTY_NOTICES.md',
      'src/**/*.types.ts',
    ],
    { encoding: 'utf8' },
  ),
  '',
  'Reserved/API/license files changed',
)
const audit = await auditStyling({
  root: process.cwd(),
  sourceRoots: ['src', 'stories', '.storybook'],
})
assert.deepEqual(audit.failures, [])
const proof = {
  base,
  attributes: 42,
  sourceFiles: new Set(map.map((e) => e.file)).size,
  styleModules: new Set(map.map((e) => e.styleFile)).size,
  styledDeclarations: declarations,
  cssPropertyOccurrences: properties,
  normalizedJsxAndLogicEquivalent: true,
  allDeclarationsVerified: true,
  colorsUseExistingExactTokens: true,
  publicExportsAndTypesAndReservedFilesUnchanged: true,
  audit: {
    files: audit.files.length,
    violations: audit.failures.length,
    sourceManifestSha256: audit.sourceManifestSha256,
  },
}
fs.writeFileSync(
  path.join(directory, 'catalog-equivalence.json'),
  JSON.stringify(proof, null, 2) + '\n',
)
fs.writeFileSync(
  path.join(directory, 'final-styling-audit.json'),
  JSON.stringify(audit, null, 2) + '\n',
)
console.log(JSON.stringify(proof))
