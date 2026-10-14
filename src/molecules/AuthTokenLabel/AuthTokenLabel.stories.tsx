import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthTokenLabel } from '.'
const meta = {
  title: 'Molecules/AuthTokenLabel',
  component: AuthTokenLabel,
  tags: ['visual-review'],
  args: { htmlFor: 'token', children: 'Código de acesso' },
} satisfies Meta<typeof AuthTokenLabel>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
