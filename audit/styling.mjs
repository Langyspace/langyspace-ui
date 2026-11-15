import { createHash } from 'node:crypto'
import { lstat, readdir, readFile, realpath } from 'node:fs/promises'
import { extname, relative, resolve, sep } from 'node:path'
import { inspectStylingSource } from './styling-source.mjs'
import { inspectStylingHtml } from './styling-html.mjs'

const sourceExtensions = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.mts',
  '.cts',
  '.html',
])
const stylesheet = new Set(['.css', '.scss', '.sass', '.less'])
const excluded =
  /(?:^|\/)(?:node_modules|\.git|\.local|dist|coverage|storybook-static|work|tmp)(?:\/|$)|\.(?:test|spec)\.[cm]?[jt]sx?$|\.d\.ts$/
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

export const defineStylingAuditConfig = (config) => config

const checkedPath = (root, path) => {
  if (typeof path !== 'string' || !path || path.includes('\\'))
    throw new Error('styling_source_path_invalid')
  const absolute = resolve(root, path)
  if (!absolute.startsWith(root + sep))
    throw new Error('styling_source_path_outside_root')
  return absolute
}

async function collect(root, path, files) {
  const absolute = checkedPath(root, path)
  if (excluded.test(path)) return
  let entries
  try {
    if ((await lstat(absolute)).isSymbolicLink())
      throw new Error('styling_owned_source_symlink_forbidden')
    entries = await readdir(absolute, { withFileTypes: true })
  } catch (error) {
    if (error.code === 'ENOENT') return
    if (error.code !== 'ENOTDIR') throw error
    files.push(absolute)
    return
  }
  for (const entry of entries) {
    const child = resolve(absolute, entry.name)
    const key = relative(root, child).split(sep).join('/')
    if (excluded.test(key)) continue
    if (entry.isSymbolicLink())
      throw new Error('styling_owned_source_symlink_forbidden')
    if (entry.isDirectory()) await collect(root, key, files)
    else files.push(child)
  }
}

// A generated bundle is only excluded when its own-source audit receipt and every byte are
// bound to an approved repository/commit. Merely naming a folder "vendor" is not an exemption.
async function generatedFiles(root, declarations) {
  const ignored = new Set()
  for (const declaration of declarations ?? []) {
    const manifestPath = checkedPath(root, declaration.manifest)
    const manifestBytes = await readFile(manifestPath)
    const manifest = JSON.parse(manifestBytes.toString('utf8'))
    if (
      manifest.sourceRepository !== declaration.sourceRepository ||
      manifest.sourceCommit !== declaration.sourceCommit ||
      !/^[a-f0-9]{64}$/.test(declaration.manifestSha256 ?? '') ||
      sha256(manifestBytes) !== declaration.manifestSha256 ||
      !/^[a-f0-9]{40}$/.test(manifest.sourceCommit ?? '') ||
      manifest.styling?.engine !== 'styled-components' ||
      manifest.styling?.policyVersion !== 1 ||
      manifest.styling?.violations !== 0 ||
      !/^[a-f0-9]{64}$/.test(manifest.styling?.sourceManifestSha256 ?? '')
    )
      throw new Error('styling_generated_source_provenance_invalid')
    const base = relative(root, resolve(manifestPath, '..'))
    const entries = Object.entries(manifest.files ?? {})
    if (!entries.length)
      throw new Error('styling_generated_asset_manifest_empty')
    for (const [name, hash] of entries) {
      if (
        !name ||
        name.includes('..') ||
        name.startsWith('/') ||
        !/^[a-f0-9]{64}$/.test(hash)
      )
        throw new Error('styling_generated_asset_entry_invalid')
      const key = relative(root, checkedPath(root, `${base}/${name}`))
        .split(sep)
        .join('/')
      if (stylesheet.has(extname(name).toLowerCase()))
        throw new Error('styling_generated_plain_stylesheet_forbidden')
      if (sha256(await readFile(checkedPath(root, key))) !== hash)
        throw new Error('styling_generated_asset_hash_mismatch')
      ignored.add(key)
    }
  }
  return ignored
}

export async function auditStyling(config) {
  if (!config?.root) throw new Error('styling_audit_root_required')
  const root = await realpath(resolve(config.root))
  const files = []
  for (const sourceRoot of config.sourceRoots ?? [
    'src',
    'public',
    'index.html',
  ])
    await collect(root, sourceRoot, files)
  const generated = await generatedFiles(root, config.generatedAssets)
  const failures = []
  const scanned = []
  const sourceHashes = []
  for (const file of [...new Set(files)].sort()) {
    const path = relative(root, file).split(sep).join('/')
    if (generated.has(path)) continue
    const extension = extname(file).toLowerCase()
    if (stylesheet.has(extension)) {
      failures.push({
        file: path,
        line: 1,
        ruleId: 'LSSTYLE001',
        message:
          'Owned stylesheet files must be migrated to styled-components.',
      })
      scanned.push(path)
      sourceHashes.push([path, sha256(await readFile(file))])
      continue
    }
    if (!sourceExtensions.has(extension)) continue
    const source = await readFile(file, 'utf8')
    sourceHashes.push([path, sha256(source)])
    const findings =
      extension === '.html'
        ? inspectStylingHtml(source, path)
        : inspectStylingSource(source, path)
    for (const finding of findings)
      failures.push({
        file: path,
        line: source.slice(0, finding.offset).split('\n').length,
        ruleId: finding.ruleId,
        message: finding.message,
      })
    scanned.push(path)
  }
  if (!scanned.length) throw new Error('styling_owned_source_scope_empty')
  return {
    version: 1,
    files: scanned,
    sourceManifestSha256: sha256(JSON.stringify(sourceHashes)),
    generatedFiles: [...generated].sort(),
    failures,
    warnings: [],
  }
}
