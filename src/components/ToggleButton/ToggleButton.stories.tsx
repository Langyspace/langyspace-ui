import type { Meta, StoryObj } from '@storybook/react-vite'
import { ToggleButton } from './ToggleButton'

const meta = {
  title: 'ToggleButton',
  component: ToggleButton,
  tags: ['visual-review'],
  args: { 'aria-pressed': true, children: 'Selecionado' },
} satisfies Meta<typeof ToggleButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Unselected: Story = { args: { 'aria-pressed': false } }

export const Disabled: Story = { args: { disabled: true } }

export const Focused: Story = {
  play: ({ canvasElement }) => {
    canvasElement.querySelector('button')?.focus()
  },
}
