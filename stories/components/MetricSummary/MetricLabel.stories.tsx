import type { Meta, StoryObj } from '@storybook/react-vite'
import { MetricLabel } from '../../../src/compatibility/MetricSummary'

const meta = {
  title: 'Compatibility/MetricLabel',
  component: MetricLabel,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof MetricLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
