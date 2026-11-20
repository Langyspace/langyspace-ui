import { ThemeProvider } from 'styled-components'
import { materialDarkTheme } from '../../../src/foundations/theme/materialDarkTheme'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { KeyValueList } from '../../../src/components/Details/KeyValueList'

const meta = {
  title: 'Details/KeyValueList',
  component: KeyValueList,
  tags: ['visual-review'],
  args: { items: [{ id: 'a', label: 'Origem', value: '123' }] },
} satisfies Meta<typeof KeyValueList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MaterialContact: Story = {
  args: {
    tone: 'material',
    items: [
      { id: 'first', label: 'First name', value: 'Ana' },
      { id: 'last', label: 'Last name', value: 'Souza' },
      { id: 'phone', label: 'Phone number', value: '984 221 507' },
    ],
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={materialDarkTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
