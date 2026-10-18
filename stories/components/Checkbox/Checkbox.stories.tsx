import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from '../../../src/components/Checkbox/Checkbox'

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['visual-review'],
  args: { 'aria-label': 'Selecionar item', defaultChecked: true },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Unchecked: Story = { args: { defaultChecked: false } }

export const Disabled: Story = { args: { disabled: true } }
