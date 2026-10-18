import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthSubmitButton } from './Button.compatibility'

const meta = {
  title: 'Compatibility/AuthSubmitButton',
  component: AuthSubmitButton,
  tags: ['visual-review'],
  args: { children: 'Continuar' },
} satisfies Meta<typeof AuthSubmitButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Disabled: Story = { args: { disabled: true } }
