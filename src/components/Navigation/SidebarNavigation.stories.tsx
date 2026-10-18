import type { Meta, StoryObj } from '@storybook/react-vite'
import { SidebarNavigation } from './SidebarNavigation'

const meta = {
  title: 'Navigation/SidebarNavigation',
  component: SidebarNavigation,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof SidebarNavigation>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
