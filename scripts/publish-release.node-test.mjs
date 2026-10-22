import assert from 'node:assert/strict'
import test from 'node:test'
import { createHash } from 'node:crypto'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { publishRelease } from './publish-release.mjs'

const fixture = (context) => {
  const root = mkdtempSync(path.join(tmpdir(), 'ui-publish-test-'))
  context.after(() => rmSync(root, { recursive: true, force: true }))
  const tag = 'v1.2.3',
    name = 'langyspace-ui-1.2.3.tgz',
    asset = path.join(root, name),
    sha = 'a'.repeat(40)
  writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify({ version: '1.2.3' }),
  )
  writeFileSync(asset, 'package-content')
  writeFileSync(
    asset + '.sha256',
    createHash('sha256').update(readFileSync(asset)).digest('hex') +
      '  ' +
      name +
      '\n',
  )
  const state = {
    exists: false,
    assets: new Map(),
    calls: [],
    collision: false,
    denyRead: false,
  }
  const run = (command, args) => {
    state.calls.push([command, ...args])
    if (command === 'git')
      return args[0] === 'merge-base'
        ? ''
        : args[0] === 'ls-remote'
          ? `${sha}\trefs/tags/${tag}`
          : sha
    if (args[1] === 'view') {
      if (state.denyRead)
        throw Object.assign(Error('denied'), { stderr: 'HTTP 403' })
      if (!state.exists)
        throw Object.assign(Error('missing'), { stderr: 'release not found' })
      return JSON.stringify({
        tagName: tag,
        assets: [...state.assets.keys()].map((name) => ({ name })),
        url: 'https://github.com/example/ui/releases/tag/' + tag,
      })
    }
    if (args[1] === 'create') {
      state.exists = true
      if (state.collision) throw Error('concurrent creator won')
    } else if (args[1] === 'upload') {
      assert.equal(args.includes('--clobber'), false)
      state.assets.set(path.basename(args[3]), readFileSync(args[3]))
    } else if (args[1] === 'download') {
      const requested = args[args.indexOf('--pattern') + 1],
        directory = args[args.indexOf('--dir') + 1]
      writeFileSync(
        path.join(directory, requested),
        state.assets.get(requested),
      )
    } else throw Error('unexpected command')
    return ''
  }
  return { tag, asset, root, state, run }
}

test('a verified UI release is repeatable without duplicate creation or asset overwrite', (context) => {
  const f = fixture(context)
  assert.equal(publishRelease(f).reused, false)
  assert.equal(publishRelease(f).reused, true)
  assert.equal(f.state.calls.filter((call) => call[2] === 'create').length, 1)
  assert.equal(f.state.calls.filter((call) => call[2] === 'upload').length, 2)
})

test('a concurrent GitHub creator is reconciled through an authoritative read', (context) => {
  const f = fixture(context)
  f.state.collision = true
  assert.equal(publishRelease(f).verified, true)
  assert.equal(f.state.assets.size, 2)
})

test('a partial release uploads only missing matching assets', (context) => {
  const f = fixture(context)
  f.state.exists = true
  f.state.assets.set(path.basename(f.asset), readFileSync(f.asset))
  assert.equal(publishRelease(f).reused, true)
  assert.equal(f.state.calls.filter((call) => call[2] === 'upload').length, 1)
})

test('an existing package with different bytes stops without clobbering', (context) => {
  const f = fixture(context)
  f.state.exists = true
  f.state.assets.set(path.basename(f.asset), Buffer.from('different'))
  assert.throws(() => publishRelease(f), /existing_asset_differs/)
  assert.equal(f.state.calls.filter((call) => call[2] === 'upload').length, 0)
})

test('permission failures never become release creation attempts', (context) => {
  const f = fixture(context)
  f.state.denyRead = true
  assert.throws(() => publishRelease(f), /read_failed/)
  assert.equal(f.state.calls.filter((call) => call[2] === 'create').length, 0)
})
