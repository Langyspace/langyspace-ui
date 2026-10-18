import type { Meta, StoryObj } from '@storybook/react-vite'
import { MetricValue } from './MetricSummary.compatibility'

const meta = {
  title: 'Compatibility/MetricValue',
  component: MetricValue,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof MetricValue>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
