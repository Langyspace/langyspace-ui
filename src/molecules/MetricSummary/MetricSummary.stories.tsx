import type { Meta, StoryObj } from '@storybook/react-vite'
import { MetricSummary } from '.'

const meta = {
  title: 'Molecules/MetricSummary',
  component: MetricSummary,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof MetricSummary>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
