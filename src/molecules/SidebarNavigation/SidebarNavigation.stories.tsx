import type { Meta, StoryObj } from '@storybook/react-vite'
import { SidebarNavigation } from '.'

const meta = {
  title: 'Molecules/SidebarNavigation',
  component: SidebarNavigation,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof SidebarNavigation>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
