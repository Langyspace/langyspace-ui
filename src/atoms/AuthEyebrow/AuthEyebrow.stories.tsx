import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthEyebrow } from '.'
const meta = {
  title: 'Atoms/AuthEyebrow',
  component: AuthEyebrow,
  tags: ['visual-review'],
  args: { children: 'Continuar' },
} satisfies Meta<typeof AuthEyebrow>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
