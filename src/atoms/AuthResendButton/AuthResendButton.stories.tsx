import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthResendButton } from '.'

const meta = {
  title: 'Atoms/AuthResendButton',
  component: AuthResendButton,
  tags: ['visual-review'],
  args: { children: 'Continuar' },
} satisfies Meta<typeof AuthResendButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Disabled: Story = { args: { disabled: true } }
