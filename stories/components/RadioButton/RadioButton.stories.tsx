import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadioButton } from '../../../src/components/RadioButton/RadioButton'

const meta = {
  title: 'RadioButton',
  component: RadioButton,
  tags: ['visual-review'],
  args: { 'aria-label': 'Selecionar item', defaultChecked: true },
} satisfies Meta<typeof RadioButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Unchecked: Story = { args: { defaultChecked: false } }

export const Disabled: Story = { args: { disabled: true } }
