import { Linter, RuleTester } from 'eslint'
import { describe, expect, it } from 'vitest'
import tseslint from 'typescript-eslint'
import langyspace, { productConfig } from '../../eslint/langyspace.mjs'

const ruleTester = new RuleTester({
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
})

ruleTester.run('no-component-types', langyspace.rules['no-component-types'], {
  valid: [
    "import type { ButtonProps } from './Button.types'\nexport function Button(props: ButtonProps) { return <button {...props} /> }",
  ],
  invalid: [
    {
      code: 'export interface ButtonProps { size?: string }',
      errors: [{ messageId: 'moveTypes' }],
    },
    {
      code: "type Size = 'sm' | 'md'",
      errors: [{ messageId: 'moveTypes' }],
    },
    {
      code: "export type { ButtonProps } from './Button.types'",
      errors: [{ messageId: 'moveTypes' }],
    },
    {
      code: "export { Button, type ButtonProps } from './Button'",
      errors: [{ messageId: 'moveTypes' }],
    },
    {
      code: 'export function Mark({ correct }: { correct: boolean }) { return correct }',
      errors: [{ messageId: 'moveTypes' }],
    },
  ],
})

ruleTester.run('no-component-styles', langyspace.rules['no-component-styles'], {
  valid: [
    "import * as Styled from './Button.styles'",
    "import { ThemeProvider } from 'styled-components'",
    "import type { DefaultTheme } from 'styled-components'",
  ],
  invalid: [
    {
      code: "import { styled, css } from 'styled-components'",
      errors: [{ messageId: 'moveStyles' }, { messageId: 'moveStyles' }],
    },
  ],
})

ruleTester.run('no-raw-colors', langyspace.rules['no-raw-colors'], {
  valid: [
    'const Root = styled.div`color: ${token.colorBrandDefault};`',
    "const id = '#root-panel'",
  ],
  invalid: [
    {
      code: "const color = '#FF1F5C'",
      errors: [{ messageId: 'useTheme' }],
    },
    {
      code: 'const Root = styled.div`\n  color: ${token.color};\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background: #fafaf9;\n`',
      errors: [
        { messageId: 'useTheme', line: 3, column: 21 },
        { messageId: 'useTheme', line: 4, column: 15 },
      ],
    },
  ],
})

ruleTester.run('no-raw-breakpoints', langyspace.rules['no-raw-breakpoints'], {
  valid: [
    'const Root = styled.div`\n  max-width: 40rem;\n  @media (max-width: ${theme.breakpoints.sm}) {\n    gap: 0;\n  }\n`',
    'const Root = styled.div`\n  @container (min-width: 56rem) {\n    gap: 0;\n  }\n`',
  ],
  invalid: [
    {
      code: 'const Root = styled.div`\n  @media (min-width: ${theme.breakpoints.sm}) and (max-height: 500px) {\n    gap: 0;\n  }\n`',
      errors: [{ messageId: 'useTheme', line: 2, column: 51 }],
    },
    {
      code: 'const Root = styled.div`@media (width < 768px) { gap: 0; }`',
      errors: [{ messageId: 'useTheme' }],
    },
  ],
})

ruleTester.run('no-raw-z-index', langyspace.rules['no-raw-z-index'], {
  valid: [
    'const Root = styled.div`z-index: 2;`',
    'const Root = styled.div`z-index: ${theme.zIndex.toast};`',
  ],
  invalid: [
    {
      code: 'const Root = styled.div`\n  position: fixed;\n  z-index: 1200;\n`',
      errors: [{ messageId: 'useTheme', line: 3, column: 3 }],
    },
  ],
})

ruleTester.run('no-inline-styles', langyspace.rules['no-inline-styles'], {
  valid: ['const node = <Fill $progress={0.5} />'],
  invalid: [
    {
      code: "const node = <Fill style={{ width: '50%' }} />",
      errors: [{ messageId: 'useStyled' }],
    },
  ],
})

describe('productConfig', () => {
  const lint = (code) =>
    new Linter({ configType: 'flat' })
      .verify(code, [{ ...productConfig, files: ['**/*.tsx'] }], 'page.tsx')
      .map((message) => message.ruleId)

  it('keeps product styling on styled-components and the theme', () => {
    expect(lint("import './page.css'")).toEqual(['no-restricted-imports'])
    expect(lint("import clsx from 'clsx'")).toEqual(['no-restricted-imports'])
    expect(lint("const color = '#FF1F5C'")).toEqual([
      'langyspace/no-raw-colors',
    ])
  })

  it('allows font packages to load their stylesheet', () => {
    expect(lint("import '@fontsource/montserrat/latin-400.css'")).toEqual([])
  })
})
