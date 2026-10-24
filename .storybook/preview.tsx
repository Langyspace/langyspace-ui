import '@fontsource/montserrat/latin-400.css'
import '@fontsource/montserrat/latin-500.css'
import '@fontsource/montserrat/latin-600.css'
import '@fontsource/montserrat/latin-700.css'
import type { Preview } from '@storybook/react-vite'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles } from '../src/foundations/theme/GlobalStyles'

// Stories render with the same global baseline as the products, except that
// horizontal overflow stays visible so layout audits can detect it.
const StorybookRoot = createGlobalStyle`
  body {
    overflow-x: visible;
  }

  #storybook-root {
    width: 100%;
    min-width: 0;
  }
`

const preview: Preview = {
  // Every component gets a generated props table from its .types.ts contract.
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <StorybookRoot />
        <Story />
      </>
    ),
  ],
  parameters: {
    a11y: {
      test: 'error',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    options: {
      storySort: {
        order: [
          'Foundations',
          'Button',
          'Form',
          'Auth',
          'Calendar',
          '*',
          'Compatibility',
        ],
      },
    },
  },
}

export default preview
