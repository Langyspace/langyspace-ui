import { spawnSync } from 'node:child_process'
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'
import { publicComponentContracts } from './component-manifest.ts'
import {
  describeComponent,
  queryComponent,
} from '../scripts/query-component-reference.mjs'

const root = resolve(import.meta.dirname, '..')
const workspaces = []

function createWorkspace(
  source,
  dependency = 'https://github.com/example/ui/releases/download/v9.8.7/ui.tgz',
) {
  const workspace = mkdtempSync(join(tmpdir(), 'ui-reference-'))
  workspaces.push(workspace)
  const consumers = queryComponent('SearchInput').consumers
  for (const { repository, path } of consumers) {
    const repositoryRoot = join(workspace, repository)
    const sourcePath = join(repositoryRoot, path)
    mkdirSync(dirname(sourcePath), { recursive: true })
    writeFileSync(sourcePath, source)
    writeFileSync(
      join(repositoryRoot, 'package.json'),
      JSON.stringify({ dependencies: { '@langyspace/ui': dependency } }),
    )
  }
  const packagePath = join(workspace, consumers[0].repository, 'package.json')
  return { workspace, packagePath }
}

afterEach(() => {
  for (const workspace of workspaces.splice(0))
    rmSync(workspace, { recursive: true, force: true })
})

describe('component reference query', () => {
  it('returns one public component without reading sibling repositories', () => {
    const result = queryComponent('SearchInput')
    expect(result.exportName).toBe('SearchInput')
    expect(result.consumerStatus).toBe('examples_recorded')
    expect(result.consumers[0].verification).toBe('not_requested')
    expect(result.consumers[0]).not.toHaveProperty('declaredDependency')
  })

  it('distinguishes an uninventoried component from an empty example inventory', () => {
    const contract = publicComponentContracts.find(
      ({ exportName }) => exportName === 'SearchInput',
    )
    const button = publicComponentContracts.find(
      ({ exportName }) => exportName === 'Button',
    )
    expect(queryComponent('Button').consumerStatus).toBe('examples_recorded')
    expect(
      describeComponent({ ...button, reference: undefined }).consumerStatus,
    ).toBe('not_inventoried')
    expect(
      describeComponent({
        ...contract,
        reference: { ...contract.reference, consumers: [] },
      }).consumerStatus,
    ).toBe('no_example_recorded')
  })

  it('fails unknown components instead of printing the whole catalog', () => {
    const result = spawnSync(
      process.execPath,
      ['scripts/query-component-reference.mjs', 'MissingComponent'],
      { cwd: root, encoding: 'utf8' },
    )
    expect(result.status).toBe(1)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain(
      'Unknown public component: MissingComponent',
    )
  })

  it('verifies an aliased JSX consumer and reads the current declared dependency', () => {
    const { workspace, packagePath } = createWorkspace(
      "import { SearchInput as Search } from '@langyspace/ui'; export const page = <Search />",
    )
    const verified = queryComponent('SearchInput', workspace).consumers
    expect(
      verified.every(
        ({ verification }) => verification === 'import_and_jsx_verified',
      ),
    ).toBe(true)
    const first = verified[0]
    expect(first.verification).toBe('import_and_jsx_verified')
    expect(first.declaredVersion).toBe('9.8.7')
    writeFileSync(
      packagePath,
      JSON.stringify({ dependencies: { '@langyspace/ui': '^10.0.0' } }),
    )
    const updated = queryComponent('SearchInput', workspace).consumers[0]
    expect(updated.declaredDependency).toBe('^10.0.0')
    expect(updated.declaredVersion).toBeNull()
  })

  it.each([
    "import type { SearchInput } from '@langyspace/ui'; export const page = <SearchInput />",
    "import { SearchInput } from '@langyspace/ui'; export const page = <div />",
    "import { SearchInput } from './local'; export const page = <SearchInput />",
    "import { SearchInput } from '@langyspace/ui'; export function Page({ SearchInput }) { return <SearchInput /> }",
  ])('rejects an example without runtime import and JSX use: %s', (source) => {
    const { workspace } = createWorkspace(source)
    expect(() => queryComponent('SearchInput', workspace)).toThrow(
      'Missing runtime import and JSX use',
    )
  })

  it('traces real JSX through local reexports and styled composition', () => {
    const { workspace } = createWorkspace(
      "import * as Styled from './ui-reference-styles'; export const page = <Styled.Search />",
    )
    for (const consumer of queryComponent('SearchInput').consumers) {
      const folder = dirname(
        join(workspace, consumer.repository, consumer.path),
      )
      writeFileSync(
        join(folder, 'ui-reference-controls.ts'),
        "export { SearchInput as SearchControl } from '@langyspace/ui'",
      )
      writeFileSync(
        join(folder, 'ui-reference-styles.ts'),
        "import styled from 'styled-components'; import { SearchControl } from './ui-reference-controls'; export const Search = styled(SearchControl)``",
      )
    }
    const result = queryComponent('SearchInput', workspace)
    for (const consumer of result.consumers) {
      expect(consumer.verification).toBe('composition_and_jsx_verified')
      expect(consumer.composition).toHaveLength(3)
      expect(consumer.composition[0]).toBe(consumer.path)
    }
  })
})
