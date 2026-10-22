import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const publishRelease = ({
  tag,
  asset,
  root = process.cwd(),
  run = execFileSync,
}) => {
  const invoke = (command, args) =>
    run(command, args, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      maxBuffer: 4 * 1024 * 1024,
    }).trim()
  const version = JSON.parse(
    readFileSync(path.join(root, 'package.json')),
  ).version
  if (!/^v\d+\.\d+\.\d+$/.test(tag ?? '') || tag !== `v${version}`)
    throw Error('ui_release_tag_version_mismatch')
  const sha = invoke('git', ['rev-parse', 'HEAD'])
  invoke('git', [
    'diff',
    '--exit-code',
    'HEAD',
    '--',
    'src',
    'package.json',
    'pnpm-lock.yaml',
    'tsup.config.ts',
  ])
  if (invoke('git', ['rev-parse', `${tag}^{commit}`]) !== sha)
    throw Error('ui_release_tag_source_mismatch')
  invoke('git', ['merge-base', '--is-ancestor', 'HEAD', 'origin/main'])
  const remote = invoke('git', [
    'ls-remote',
    'origin',
    `refs/tags/${tag}`,
    `refs/tags/${tag}^{}`,
  ]).split('\n')
  const tagSha = (
    remote.find((line) => line.endsWith('^{}')) ?? remote[0]
  ).split(/\s+/)[0]
  if (tagSha !== sha) throw Error('ui_release_remote_tag_changed')
  const file = path.resolve(root, asset),
    name = path.basename(file)
  if (name !== `langyspace-ui-${version}.tgz`)
    throw Error('ui_release_asset_name_invalid')
  const hash = (bytes) => createHash('sha256').update(bytes).digest('hex')
  const expected = hash(readFileSync(file))
  const checksum = `${expected}  ${name}`
  if (readFileSync(file + '.sha256', 'utf8').trim() !== checksum)
    throw Error('ui_release_checksum_invalid')
  const view = () => {
    try {
      return JSON.parse(
        invoke('gh', ['release', 'view', tag, '--json', 'tagName,assets,url']),
      )
    } catch (error) {
      if (
        /release not found|HTTP 404/i.test(
          String(error.stderr ?? error.message),
        )
      )
        return null
      throw Error('ui_release_read_failed')
    }
  }
  let release = view()
  let reused = Boolean(release)
  if (!release) {
    try {
      invoke('gh', [
        'release',
        'create',
        tag,
        '--generate-notes',
        '--title',
        `@langyspace/ui ${version}`,
        '--verify-tag',
      ])
    } catch {
      // A concurrent creator may have won GitHub's unique-tag constraint. Re-read, never clobber.
      release = view()
      if (!release) throw Error('ui_release_creation_failed')
      reused = true
    }
  }
  for (const source of [file, file + '.sha256']) {
    release = view()
    const assetName = path.basename(source)
    if (!release) throw Error('ui_release_readback_failed')
    if (!release.assets.some((entry) => entry.name === assetName)) {
      try {
        invoke('gh', ['release', 'upload', tag, source])
      } catch {
        if (!view()?.assets.some((entry) => entry.name === assetName))
          throw Error('ui_release_upload_failed')
      }
    }
    const directory = mkdtempSync(path.join(tmpdir(), 'ui-release-readback-'))
    try {
      invoke('gh', [
        'release',
        'download',
        tag,
        '--pattern',
        assetName,
        '--dir',
        directory,
      ])
      const downloaded = path.join(directory, assetName)
      if (
        !existsSync(downloaded) ||
        hash(readFileSync(downloaded)) !== hash(readFileSync(source))
      )
        throw Error('ui_release_existing_asset_differs')
    } finally {
      rmSync(directory, { recursive: true, force: true })
    }
  }
  return {
    verified: true,
    reused,
    sourceSha: sha,
    tag,
    asset: name,
    sha256: expected,
    url: view().url,
  }
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  try {
    console.log(
      JSON.stringify(
        publishRelease({ tag: process.argv[2], asset: process.argv[3] }),
      ),
    )
  } catch (error) {
    console.error(
      /^ui_release_[a-z_]+$/.test(error.message)
        ? error.message
        : 'ui_release_failed',
    )
    process.exitCode = 1
  }
}
