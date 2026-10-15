import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthResendAction } from '.'
const meta = {
  title: 'Molecules/AuthResendAction',
  component: AuthResendAction,
  tags: ['visual-review'],
  args: { children: 'Continuar' },
} satisfies Meta<typeof AuthResendAction>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
