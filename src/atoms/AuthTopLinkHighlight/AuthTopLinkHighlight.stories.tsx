import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthTopLinkHighlight } from '.'
const meta = {
  title: 'Atoms/AuthTopLinkHighlight',
  component: AuthTopLinkHighlight,
  tags: ['visual-review'],
  args: { children: 'Continuar' },
} satisfies Meta<typeof AuthTopLinkHighlight>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
