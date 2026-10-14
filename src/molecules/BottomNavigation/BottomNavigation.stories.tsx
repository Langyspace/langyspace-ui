import type { Meta, StoryObj } from '@storybook/react-vite'
import { BottomNavigation } from '.'
const meta = {
  title: 'Molecules/BottomNavigation',
  component: BottomNavigation,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof BottomNavigation>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
