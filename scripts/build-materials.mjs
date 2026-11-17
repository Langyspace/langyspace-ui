import { build } from 'vite'
import react from '@vitejs/plugin-react'
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { mkdir, readFile, readdir, copyFile, writeFile } from 'node:fs/promises'
import { resolve, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { styledComponentsBuild } from './styled-components-build.mjs'
import { auditStyling } from '../audit/index.mjs'
const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const preview = process.argv.includes('--preview')
const environmentArg = process.argv.indexOf('--environment')
const environment =
  environmentArg >= 0 ? process.argv[environmentArg + 1] : 'staging'
if (!['staging', 'production'].includes(environment))
  throw new Error('materials_environment_invalid')
const studentPortalOrigin =
  environment === 'staging'
    ? 'https://student.staging.langy.space'
    : 'https://student.langy.space'
const outputArg = process.argv.indexOf('--out')
const outDir = resolve(
  root,
  outputArg >= 0 ? process.argv[outputArg + 1] : '.local/materials-artifact',
)
const git = (...args) =>
  execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim()
const dirty = git(
  'status',
  '--porcelain',
  '--',
  'src',
  'stories',
  'scripts/build-materials.mjs',
)
if (dirty && !preview) throw new Error('materials_source_must_be_committed')
const sourceCommit = git('rev-parse', 'HEAD')
const sourceDate = git('show', '-s', '--format=%cI', 'HEAD')
const audit = await auditStyling({
  root,
  sourceRoots: ['src', 'stories', '.storybook'],
})
if (audit.failures.length) throw new Error('materials_styling_audit_failed')
await build({
  configFile: false,
  root: resolve(root, 'stories/materials/Standalone'),
  base: './',
  publicDir: false,
  plugins: [
    {
      name: 'material-consumer-destinations',
      enforce: 'pre',
      transform(code, id) {
        if (
          id.includes('/stories/materials/') &&
          /\.(tsx?|json)(?:\?|$)/.test(id)
        )
          return code.replaceAll(
            'https://student.langy.space',
            studentPortalOrigin,
          )
      },
    },
    styledComponentsBuild(),
    react(),
  ],
  define: { __MATERIAL_SOURCE_COMMIT__: JSON.stringify(sourceCommit) },
  build: {
    outDir,
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: { ecma: 2020, compress: { passes: 3 } },
  },
})
const catalog = JSON.parse(
  await readFile(
    resolve(root, 'stories/materials/Standalone/catalog.json'),
    'utf8',
  ),
)
await mkdir(resolve(outDir, 'covers'), { recursive: true })
for (const item of catalog) {
  const cover = `covers/${item.key}.webp`
  await copyFile(resolve(root, item.coverSource), resolve(outDir, cover))
  item.cover = cover
  delete item.coverSource
}
await writeFile(
  resolve(outDir, 'catalog.json'),
  JSON.stringify(catalog, null, 2) + '\n',
)
const files = {}
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = resolve(dir, entry.name)
    if (entry.isDirectory()) await walk(path)
    else {
      if (/\.(css|scss|sass|less)$/i.test(path))
        throw new Error('materials_plain_stylesheet_forbidden')
      files[relative(outDir, path).split('\\').join('/')] = createHash('sha256')
        .update(await readFile(path))
        .digest('hex')
    }
  }
}
await walk(outDir)
const manifest = {
  schemaVersion: 1,
  environment,
  studentPortalOrigin,
  sourceRepository: 'https://github.com/Langyspace/langyspace-ui',
  sourceCommit,
  sourceDate,
  sourceClean: !dirty,
  styling: {
    engine: 'styled-components',
    policyVersion: 1,
    violations: 0,
    sourceManifestSha256: audit.sourceManifestSha256,
  },
  files,
}
const bytes = JSON.stringify(manifest, null, 2) + '\n'
await writeFile(resolve(outDir, 'manifest.json'), bytes)
console.log(
  JSON.stringify({
    outDir,
    sourceCommit,
    sourceClean: !dirty,
    manifestSha256: createHash('sha256').update(bytes).digest('hex'),
    files: Object.keys(files).length,
  }),
)
