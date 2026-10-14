import type { Meta, StoryObj } from '@storybook/react-vite'
import { ConnectionNotice } from '.'
const meta = {
  title: 'Molecules/ConnectionNotice',
  component: ConnectionNotice,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof ConnectionNotice>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
