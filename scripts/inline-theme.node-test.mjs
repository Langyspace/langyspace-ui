import assert from 'node:assert/strict'
import { resolve } from 'node:path'
import test from 'node:test'
import { build } from 'vite'
import { styledComponentsBuild } from './styled-components-build.mjs'

const root = resolve(import.meta.dirname, '..')
const entry = resolve(root, 'src/theme-build-fixture.js').replaceAll('\\', '/')

async function bundle(source) {
  const result = await build({
    root,
    configFile: false,
    logLevel: 'silent',
    plugins: [
      {
        name: 'theme-build-fixture',
        enforce: 'pre',
        resolveId(id) {
          if (resolve(root, id).replaceAll('\\', '/') === entry) return entry
        },
        load(id) {
          if (id === entry) return source
        },
      },
      ...styledComponentsBuild(),
    ],
    build: { lib: { entry, formats: ['es'] }, minify: false, write: false },
  })
  const outputs = Array.isArray(result) ? result : [result]
  return outputs
    .flatMap((item) => item.output)
    .find((item) => item.type === 'chunk').code
}

const run = (source) =>
  import(
    'data:text/javascript;base64,' + Buffer.from(source).toString('base64')
  )

test('shares object defaults with the public theme and preserves token aliases', async () => {
  const output = await bundle(`
    import { theme } from './foundations/theme/theme'
    export { theme }
    export const status = theme.semantic.status
    export const gap = theme.spacing[2]
  `)
  const { theme, status, gap } = await run(output)
  assert.equal(status, theme.semantic.status)
  assert.equal(theme.spacing, theme.space)
  assert.equal(theme.radius, theme.radii)
  assert.equal(gap, theme.spacing[2])
  assert.ok(Object.hasOwn(theme.voiceMessage, 'questionSurface'))
  assert.equal(theme.voiceMessage.questionSurface, undefined)
})

test('bundles a default slice independently of unrelated theme branches', async () => {
  const output = await bundle(`
    import { theme } from './foundations/theme/theme'
    export const getStatus = tone => theme.semantic.status[tone]
  `)
  const { getStatus } = await run(output)
  assert.equal(getStatus('success').foreground, '#166534')
  assert.doesNotMatch(output, /13\.28125rem|phoneWidth/)
})
