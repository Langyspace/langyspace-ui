import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../../atoms/Button'
import { Card } from '.'

const meta = {
  title: 'Molecules/Layout/Card',
  component: Card,
  tags: ['visual-review'],
  args: {
    role: 'group',
    'aria-label': 'Resumo',
    children: (
      <>
        <h2>Resumo da semana</h2>
        <p>Confira os próximos passos e as informações disponíveis.</p>
      </>
    ),
  },
} satisfies Meta<typeof Card>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const WithAction: Story = {
  args: {
    children: (
      <>
        <h2>Prioridades agora</h2>
        <p>Uma ação composta pelo consumidor, sem estado no Card.</p>
        <Button size="sm">Ver detalhes</Button>
      </>
    ),
  },
}
export const LongContent: Story = {
  tags: ['layout-boundary'],
  args: {
    children: (
      <>
        <h2>Informações de acompanhamento e próximos passos da semana</h2>
        <p>
          Uma referência longa mantém todo o conteúdo disponível em containers
          estreitos.
        </p>
        <p>
          referencia_longa_sem_espacos_que_precisa_permanecer_inteira_e_acessivel_123456789
        </p>
      </>
    ),
  },
}
