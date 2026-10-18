import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatAction } from './StatCard.compatibility'

const meta = {
  title: 'Compatibility/StatAction',
  component: StatAction,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof StatAction>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
