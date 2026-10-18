import type { Preview } from '@storybook/react-vite'
import './preview.css'

const preview: Preview = {
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
