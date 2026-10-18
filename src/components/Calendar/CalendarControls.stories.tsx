import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarControls } from './CalendarControls'
import { styled } from 'styled-components'

const Legend = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-left: auto;
  font-size: 0.75rem;
`

const meta = {
  title: 'Calendar/CalendarControls',
  component: CalendarControls,
  tags: ['visual-review'],
  args: {
    label: 'outubro2026',
    previousLabel: 'Mês anterior',
    nextLabel: 'Próximo mês',
    onPrevious: () => {},
    onNext: () => {},
    onToday: () => {},
  },
} satisfies Meta<typeof CalendarControls>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLegend: Story = {
  args: {
    children: (
      <Legend>
        <span>Agendada</span>
        <span>Aula dada</span>
        <span>Falta</span>
      </Legend>
    ),
  },
}

export const LongLabel: Story = {
  args: {
    label: 'Período com nome longo para verificar a quebra do cabeçalho',
  },
}

export const NarrowContainer: Story = {
  render: (args) => (
    <div style={{ maxWidth: '20rem' }}>
      <CalendarControls {...args} />
    </div>
  ),
}
