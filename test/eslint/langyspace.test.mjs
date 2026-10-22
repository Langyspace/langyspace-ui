import { RuleTester } from 'eslint'
import tseslint from 'typescript-eslint'
import langyspace from '../../eslint/langyspace.mjs'

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

ruleTester.run('no-inline-styles', langyspace.rules['no-inline-styles'], {
  valid: ['const node = <Fill $progress={0.5} />'],
  invalid: [
    {
      code: "const node = <Fill style={{ width: '50%' }} />",
      errors: [{ messageId: 'useStyled' }],
    },
  ],
})
