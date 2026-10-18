import type { Meta, StoryObj } from '@storybook/react-vite'
import { MetricSummary } from './MetricSummary'

const meta = {
  title: 'MetricSummary',
  component: MetricSummary,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof MetricSummary>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ContentProps: Story = {
  args: { value: 42, label: 'Acertos' },
}

export const ZeroValue: Story = {
  args: { value: 0, label: 'Erros' },
}

export const LongContent: Story = {
  args: { value: '123.456', label: 'Atividades concluídas' },
}
