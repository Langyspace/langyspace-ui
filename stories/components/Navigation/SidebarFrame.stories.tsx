import type { Meta, StoryObj } from '@storybook/react-vite'
import { SidebarFrame } from '../../../src/components/Navigation/SidebarFrame'

const meta = {
  title: 'Navigation/SidebarFrame',
  component: SidebarFrame,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof SidebarFrame>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
