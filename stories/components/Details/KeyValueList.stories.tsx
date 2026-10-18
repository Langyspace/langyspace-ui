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
