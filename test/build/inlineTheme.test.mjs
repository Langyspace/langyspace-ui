import { transformSync } from '@babel/core'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { inlineTheme } from '../../scripts/inline-theme.mjs'

const filename = resolve(import.meta.dirname, '../../src/components/Probe/Probe.styles.ts')

const transform = (code) =>
  transformSync(code, {
    babelrc: false,
    configFile: false,
    filename,
    plugins: [inlineTheme],
  }).code

describe('inlineTheme', () => {
  it('replaces static theme paths with values and drops the import', () => {
    const output = transform(
      "import { theme } from '../../foundations/theme/theme'\nexport const color = theme.colors.text.primary\nexport const gap = theme.spacing[3]",
    )

    expect(output).toContain('"#0A0A0A"')
    expect(output).toContain('"0.75rem"')
    expect(output).not.toContain('foundations/theme/theme')
  })

  it('inlines the static part of a dynamic lookup', () => {
    const output = transform(
      "import { theme } from '../../foundations/theme/theme'\nexport const pick = (tone) => theme.semantic.status[tone].background",
    )

    expect(output).toMatch(/\{\s*neutral:/)
    expect(output).toContain('[tone].background')
    expect(output).not.toContain('foundations/theme/theme')
  })

  it('keeps the import when the whole theme is used', () => {
    const output = transform(
      "import { theme } from '../../foundations/theme/theme'\nexport const all = theme",
    )

    expect(output).toContain('foundations/theme/theme')
  })

  it('fails the build for a path that is not in the theme', () => {
    expect(() =>
      transform(
        "import { theme } from '../../foundations/theme/theme'\nexport const color = theme.colors.text.missing",
      ),
    ).toThrow('theme.colors.text.missing does not exist')
  })
})
