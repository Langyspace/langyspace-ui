import assert from 'node:assert/strict'
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { auditArchitecture, defineAuditConfig } from '../audit/index.mjs'

const root = await mkdtemp(join(tmpdir(), 'langyspace-ui-audit-'))

try {
  await mkdir(join(root, 'src', 'atoms', 'Broken'), { recursive: true })
  await mkdir(join(root, 'src', 'atoms', 'Button'), { recursive: true })
  await mkdir(join(root, 'src', 'foundations'), { recursive: true })
  await mkdir(join(root, 'src', 'internal'), { recursive: true })
  await mkdir(join(root, 'src', 'molecules'), { recursive: true })
  await mkdir(join(root, 'src', 'primitives'), { recursive: true })
  await writeFile(
    join(root, 'src', 'atoms', 'Button', 'types.ts'),
    "export type ButtonVariant = 'primary' | 'secondary'\n",
  )
  await writeFile(
    join(root, 'src', 'atoms', 'Broken', 'index.tsx'),
    `import { Button as BaseButton } from '@langyspace/ui'
import { Button } from '@langyspace/ui/private'
import { Higher } from '../../molecules/Higher'
import { Private } from '../../molecules/Other/styles'
import styled, { keyframes } from 'styled-components'

type BrokenButtonVariant =
  | 'primary'
  | 'secondary'
const spin = keyframes\`to { transform: rotate(360deg); }\`
const Broken = styled(BaseButton)\`border-radius: 3px;\`
const NativeStyled = styled.button\`color: red;\`
const Parent = styled.div\`> button { height: 41px; }\`
export const Native = () => <button>Broken</button>
export const Removed = () => <BaseButton tone="brand">Broken</BaseButton>
export const ValidIcon = () => <IconButton shape="rounded">Valid</IconButton>
export type CosmeticProps = { color?: string }
`,
  )
  await writeFile(
    join(root, 'src', 'molecules', 'Higher.ts'),
    'export const Higher = true\n',
  )
  await writeFile(
    join(root, 'src', 'foundations', 'tokens.ts'),
    'export const token = 1\n',
  )
  await writeFile(
    join(root, 'src', 'foundations', 'BrokenFoundation.ts'),
    "import { Native } from '../atoms/Broken'\nexport const brokenFoundation = Native\n",
  )
  await writeFile(
    join(root, 'src', 'primitives', 'BrokenPrimitive.ts'),
    "import { Native } from '../atoms/Broken'\nexport const brokenPrimitive = Native\n",
  )
  await writeFile(
    join(root, 'src', 'internal', 'BrokenInternal.ts'),
    "import { Higher } from '../molecules/Higher'\nexport const brokenInternal = Higher\n",
  )

  await writeFile(
    join(root, 'src', 'molecules', 'LocalButton.ts'),
    `import { Button as LocalButton } from '@/components/base/Button'
import styled from 'styled-components'
const Surface = styled.div\`display: grid;\`
import { Card } from '@langyspace/ui'
export const composition = [LocalButton, Surface, Card]
`,
  )

  const result = await auditArchitecture(
    defineAuditConfig({
      root,
      sourceRoots: ['src'],
      canonicalComponents: ['Button'],
      auditDescendantActions: true,
      auditPrivateStyles: true,
      additionalRules: [
        {
          id: 'LSUI012',
          message: 'free cosmetic prop',
          pattern:
            /^\s*(?:export\s+)?type\s+CosmeticProps[^}]*\bcolor\??:\s*string/m,
          remediation: 'use a semantic variant',
        },
      ],
      layerDependencies: {
        atoms: ['atoms', 'foundations'],
        foundations: ['foundations'],
        internal: ['foundations', 'internal', 'primitives'],
        molecules: ['atoms', 'foundations', 'molecules'],
        primitives: ['foundations', 'primitives'],
      },
    }),
  )
  const output = result.failures.join('\n')
  assert.match(
    output,
    /\[LSUI007\] src\/atoms\/Button\/types\.ts:/,
    'A consumer with the same relative path must still reject copied types',
  )
  assert.doesNotMatch(output, /\[LSUI005\] src\/molecules\/LocalButton\.ts:/)

  for (const expected of [
    'local wait spinner',
    'unclassified motion',
    'native JSX button',
    'styled.button declaration',
    'private @langyspace/ui import',
    'direct Button import',
    'removed action prop',
    'copied Button union',
    'styled\\(BaseButton\\) overrides canonical recipe',
    'descendant action selector',
    'private.*styles',
    'free cosmetic prop',
    'atoms cannot depend on the higher molecules layer',
    'foundations cannot depend on the higher atoms layer',
    'internal cannot depend on the higher molecules layer',
    'primitives cannot depend on the higher atoms layer',
  ]) {
    assert.match(output, new RegExp(expected))
  }

  for (const ruleId of Array.from(
    { length: 12 },
    (_, index) => `LSUI${String(index + 1).padStart(3, '0')}`,
  )) {
    assert.ok(
      result.diagnostics.some((diagnostic) => diagnostic.ruleId === ruleId),
      `missing isolated diagnostic for ${ruleId}`,
    )
  }

  for (const diagnostic of result.diagnostics) {
    assert.ok(diagnostic.path.startsWith('src/'))
    assert.ok(diagnostic.line >= 1)
    assert.ok(diagnostic.remediation.length > 8)
  }
  assert.equal(
    result.diagnostics.filter(({ ruleId }) => ruleId === 'LSUI006').length,
    1,
    'IconButton shape must not be classified as a removed Button prop',
  )

  await assert.rejects(
    () =>
      auditArchitecture({
        root,
        allowedDomainMotion: [{ path: 'src/file.ts', reason: 'missing owner' }],
      }),
    /exact path, reason and owner/,
  )

  await assert.rejects(
    () =>
      auditArchitecture({
        root,
        requireExceptionExpiry: true,
        spinnerOwners: [
          { owner: 'Owner', path: 'src/file.ts', reason: 'temporary' },
        ],
      }),
    /require expiresAt/,
  )

  await assert.rejects(
    () =>
      auditArchitecture({
        root,
        spinnerOwners: [
          {
            expiresAt: '2026-01-01',
            owner: 'Owner',
            path: 'src/file.ts',
            reason: 'temporary',
          },
        ],
        today: '2026-08-25',
      }),
    /exception expired/,
  )

  const positiveRoot = join(root, 'positive')
  await mkdir(join(positiveRoot, 'src', 'atoms', 'Safe'), { recursive: true })
  await writeFile(
    join(positiveRoot, 'src', 'atoms', 'Safe', 'index.tsx'),
    `export const Safe = () => <div>Safe</div>\n`,
  )
  const positive = await auditArchitecture({ root: positiveRoot })
  assert.deepEqual(positive.diagnostics, [])
  assert.deepEqual(positive.failures, [])

  const reactRoot = join(root, 'react-components')
  for (const directory of [
    'components/Button',
    'components/Other',
    'foundations',
    'internal',
  ]) {
    await mkdir(join(reactRoot, 'src', directory), { recursive: true })
  }
  await writeFile(
    join(reactRoot, 'src/components/Button/Button.types.ts'),
    "export type ButtonVariant = 'primary' | 'secondary'\n",
  )
  await writeFile(
    join(reactRoot, 'src/components/Button/Private.ts'),
    "import { Root } from '../Other/Other.styles'\nexport const privateRecipe = Root\n",
  )
  await writeFile(
    join(reactRoot, 'src/foundations/Broken.ts'),
    "import { Button } from '../components/Button/Button'\nexport const broken = Button\n",
  )
  await writeFile(
    join(reactRoot, 'src/internal/Broken.ts'),
    "import { Button } from '../components/Button/Button'\nexport const broken = Button\n",
  )
  const reactResult = await auditArchitecture({
    root: reactRoot,
    auditPrivateStyles: true,
    layerDependencies: {
      components: ['components', 'foundations', 'internal'],
      foundations: ['foundations'],
      internal: ['foundations', 'internal'],
    },
  })
  assert(
    reactResult.diagnostics.some(
      (d) =>
        d.ruleId === 'LSUI007' &&
        d.path === 'src/components/Button/Button.types.ts',
    ),
  )
  assert(reactResult.diagnostics.some((d) => d.ruleId === 'LSUI010'))
  assert.equal(
    reactResult.diagnostics.filter((d) => d.ruleId === 'LSUI011').length,
    2,
  )

  await assert.rejects(
    () =>
      auditArchitecture({
        root,
        allowedDescendantActionOverrides: [
          {
            owner: 'Missing selector fixture',
            path: 'src/file.ts',
            reason: 'selector is intentionally absent',
          },
        ],
      }),
    /exact path, selector, reason and owner/,
  )

  console.log(
    'Architecture audit fixtures passed: 12 rule IDs plus config and positive contracts proved.',
  )
} finally {
  await rm(root, { force: true, recursive: true })
}
