import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatCard } from '../../../src/components/StatCard/StatCard'
import { Button } from '../../../src/components/Button/Button'

const meta = {
  title: 'StatCard',
  component: StatCard,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof StatCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ContentProps: Story = {
  args: { value: 42, label: 'Alunos ativos' },
}

export const WithAction: Story = {
  args: {
    value: 0,
    label: 'Aulas agendadas',
    tone: 'brand',
    action: (
      <Button size="sm" variant="text" type="button">
        Ver aulas
      </Button>
    ),
  },
}

export const LongContent: Story = {
  args: { value: '1.234.567', label: 'Atividades concluídas neste período' },
}
