import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatLabel } from './StatCard.compatibility'

const meta = {
  title: 'Compatibility/StatLabel',
  component: StatLabel,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof StatLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
