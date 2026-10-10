import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthTitle } from '../AuthTitle'
import { AuthAccent } from '.'

const meta = {
  args: { children: 'volta.' },
  component: AuthAccent,
  tags: ['visual-review'],
  title: 'Atoms/Auth/AuthAccent',
  render: (args) => (
    <AuthTitle>
      <AuthAccent {...args} />
    </AuthTitle>
  ),
} satisfies Meta<typeof AuthAccent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const InlineCopy: Story = {
  render: (args) => (
    <AuthTitle>
      Bom te ver de <AuthAccent {...args} />
    </AuthTitle>
  ),
}
