import js from '@eslint/js'
import eslintReact from '@eslint-react/eslint-plugin'
import prettier from 'eslint-config-prettier'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import { importX } from 'eslint-plugin-import-x'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import langyspace from './eslint/langyspace.mjs'

const libraryFiles = ['src/**/*.{ts,tsx}']
const componentFiles = ['src/components/**/*.tsx', 'src/internal/**/*.tsx']

// Shared presets mix warnings and errors; library conventions are all blocking.
const asErrors = (config) => ({
  ...config,
  rules: Object.fromEntries(
    Object.entries(config.rules ?? {}).map(([rule, setting]) => {
      const [severity, ...options] = [setting].flat()

      return [
        rule,
        ['off', 0].includes(severity) ? 'off' : ['error', ...options],
      ]
    }),
  ),
})

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', '.local', 'release', 'storybook-static'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: libraryFiles,
    extends: [
      ...tseslint.configs.strictTypeChecked,
      asErrors(eslintReact.configs['strict-type-checked']),
      eslintReact.configs['disable-conflict-eslint-plugin-react-hooks'],
      asErrors(jsxA11y.flatConfigs.recommended),
      asErrors(importX.flatConfigs.recommended),
      importX.flatConfigs.typescript,
    ],
    plugins: { langyspace },
    settings: {
      'import-x/resolver-next': [createTypeScriptImportResolver()],
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowNumber: true },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'separate-type-imports' },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['typeProperty', 'parameter'],
          types: ['boolean'],
          format: null,
          custom: { regex: '^is[A-Z]', match: false },
        },
      ],
      'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import-x/no-cycle': 'error',
      'import-x/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './src',
              from: ['./stories', './test', './quality', './.storybook'],
              message: 'Library source cannot depend on stories or tests.',
            },
            {
              target: './src/foundations',
              from: ['./src/components', './src/internal'],
              message: 'Foundations cannot depend on components.',
            },
            {
              target: './src/internal',
              from: './src/components',
              message: 'Internal infrastructure cannot depend on components.',
            },
          ],
        },
      ],
      'langyspace/no-inline-styles': 'error',
      'langyspace/no-raw-breakpoints': 'error',
      'langyspace/no-raw-colors': 'error',
      'langyspace/no-raw-z-index': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              regex: '\\.(css|less|sass|scss)$',
              message: 'Style with styled-components.',
            },
            {
              regex:
                '^(@emotion/|@vanilla-extract/|clsx$|classnames$|sass|styled-jsx|tailwindcss)',
              message: 'Style with styled-components.',
            },
          ],
        },
      ],
    },
  },
  {
    files: componentFiles,
    rules: {
      'langyspace/no-component-styles': 'error',
      'langyspace/no-component-types': 'error',
    },
  },
  {
    files: ['src/foundations/**/*.ts'],
    rules: {
      'langyspace/no-raw-breakpoints': 'off',
      'langyspace/no-raw-colors': 'off',
      'langyspace/no-raw-z-index': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.node,
      sourceType: 'module',
    },
  },
  {
    files: [
      'scripts/audit-storybook-layout.mjs',
      'scripts/layout-audit/**/*.mjs',
      'scripts/check-react-composition.mjs',
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['.storybook/fixtures.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  prettier,
)
