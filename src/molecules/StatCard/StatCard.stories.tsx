import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatCard } from '.'

const meta = {
  title: 'Molecules/StatCard',
  component: StatCard,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof StatCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
