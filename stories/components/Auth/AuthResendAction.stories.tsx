import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthResendAction } from '../../../src/components/Auth/AuthResendAction'

const meta = {
  title: 'Auth/AuthResendAction',
  component: AuthResendAction,
  tags: ['visual-review'],
  args: {
    children: 'Não recebeu o código?',
    resendLabel: 'Reenviar código',
    onResend: () => {},
  },
} satisfies Meta<typeof AuthResendAction>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Waiting: Story = {
  args: { children: 'Reenviar em 00:30', disabled: true },
}
