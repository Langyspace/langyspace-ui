import { readFileSync } from 'node:fs'
import { access } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import ts from 'typescript'
import { describe, expect, it } from 'vitest'
import {
  publicComponentContracts,
  type ComponentContract,
} from './component-manifest'

const root = resolve(import.meta.dirname, '..')

// Multiple contracts may point to the same real test or story file. File names
// do not prove coverage: the recorded export must be imported at runtime.
function runtimeImports(source: string) {
  const file = ts.createSourceFile(
    'coverage.tsx',
    source,
    ts.ScriptTarget.Latest,
    true,
  )
  return file.statements.flatMap((statement) => {
    if (
      !ts.isImportDeclaration(statement) ||
      statement.importClause?.isTypeOnly
    )
      return []
    const bindings = statement.importClause?.namedBindings
    if (!bindings || !ts.isNamedImports(bindings)) return []
    return bindings.elements
      .filter((entry) => !entry.isTypeOnly)
      .map((entry) => (entry.propertyName ?? entry.name).text)
  })
}

describe('public component manifest', () => {
  it('distinguishes runtime coverage imports from type-only imports and aliases', () => {
    expect(
      runtimeImports(
        "import { AuthBackButton, AuthSubmitButton as Submit, type ButtonProps } from '../src'",
      ),
    ).toEqual(['AuthBackButton', 'AuthSubmitButton'])
    expect(runtimeImports("import type { Button } from '../src'")).toEqual([])
    expect(runtimeImports("import { Avatar } from '../src'")).not.toContain(
      'Button',
    )
  })

  it('matches every public component value export', () => {
    const entrypoint = readFileSync(resolve(root, 'src/index.ts'), 'utf8')
    const componentExports = Array.from(
      entrypoint.matchAll(/^export \{ ([A-Z][A-Za-z0-9]*) \}/gm),
      ([, exportName]) => exportName,
    ).sort()
    const manifestExports = publicComponentContracts
      .map(({ exportName }) => exportName)
      .sort()

    expect(manifestExports).toEqual(componentExports)
    expect(new Set(manifestExports).size).toBe(manifestExports.length)
  })

  it('points every component or compatibility export at its implementation owner', async () => {
    for (const contractValue of publicComponentContracts) {
      const contract: ComponentContract = contractValue
      const owner = contract.compatibilityFor ?? contract.exportName
      expect(contract.ownerPath).toMatch(
        /^src\/(?:components|compatibility)\/(?:[^/]+\/)*[^/]+\.tsx$/,
      )
      expect(contract.ownerPath).not.toMatch(/\/index\.tsx$/)

      if (contract.compatibilityFor) {
        const canonical: ComponentContract | undefined =
          publicComponentContracts.find(
            (candidate) => candidate.exportName === owner,
          )

        expect(canonical).toBeDefined()
        expect(canonical?.compatibilityFor).toBeUndefined()
        expect(
          contract.ownerPath === `src/compatibility/${owner}.tsx` ||
            dirname(contract.ownerPath) === dirname(canonical!.ownerPath),
        ).toBe(true)
        expect(canonical?.exportName).not.toBe(contract.exportName)
        expect(
          readFileSync(resolve(root, contract.ownerPath), 'utf8'),
        ).toContain(`export function ${contract.exportName}`)
      }
      await expect(
        access(resolve(root, contract.ownerPath)),
      ).resolves.toBeUndefined()
      expect(contract.runtimeMarker).toMatch(/^lsui-sc-[a-z-]+$/)
    }
  })

  it('keeps every public component completely covered', async () => {
    for (const contractValue of publicComponentContracts) {
      const contract: ComponentContract = contractValue
      expect(contract.test.path).toMatch(/^test\/.+\.test\.tsx$/)
      expect(contract.story.path).toMatch(/^stories\/.+\.stories\.tsx$/)

      const testSource = readFileSync(resolve(root, contract.test.path), 'utf8')
      const storySource = readFileSync(
        resolve(root, contract.story.path),
        'utf8',
      )
      expect(runtimeImports(testSource), contract.test.path).toContain(
        contract.exportName,
      )
      expect(runtimeImports(storySource), contract.story.path).toContain(
        contract.exportName,
      )
      expect(storySource).toContain(`title: '${contract.story.title}'`)

      for (const coverage of [
        contract.test,
        contract.story,
        contract.browserSmoke,
        contract.ssrSmoke,
      ]) {
        expect(coverage.status).toBe('complete')
      }

      if (contract.test.status === 'complete') {
        await expect(
          access(resolve(root, contract.test.path)),
        ).resolves.toBeUndefined()
      }

      if (contract.story.status === 'complete') {
        await expect(
          access(resolve(root, contract.story.path)),
        ).resolves.toBeUndefined()
      }
    }
  })

  it('keeps inventoried props and documentation references valid', async () => {
    for (const contractValue of publicComponentContracts) {
      const contract: ComponentContract = contractValue
      expect(contract.reference).toBeDefined()

      const { propsPath, documentation, consumers } = contract.reference
      await expect(access(resolve(root, propsPath))).resolves.toBeUndefined()
      const markdown = readFileSync(resolve(root, documentation.path), 'utf8')
      const headings = [...markdown.matchAll(/^#{1,6} (.+)$/gm)].map(
        ([, heading]) => heading.toLowerCase().replaceAll(' ', '-'),
      )
      expect(headings).toContain(documentation.anchor)
      for (const consumer of consumers) {
        expect(consumer.repository).toMatch(/^langyspace(?:-[a-z]+)?$/)
        expect(consumer.path).toMatch(/^src\/.+\.tsx$/)
      }
    }
  })

  it('keeps quality tooling outside the published package files', () => {
    const packageJson = JSON.parse(
      readFileSync(resolve(root, 'package.json'), 'utf8'),
    ) as { files?: string[] }

    expect(packageJson.files).not.toContain('quality')
  })
})
