import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../../atoms/Button'
import { NoticeBanner } from '.'

const meta = {
  title: 'Molecules/Feedback/NoticeBanner',
  component: NoticeBanner,
  tags: ['visual-review'],
  args: {
    title: 'Sem conexão',
    icon: <span aria-hidden="true">!</span>,
    children:
      'O conteúdo já carregado continua disponível enquanto a conexão é restabelecida.',
  },
} satisfies Meta<typeof NoticeBanner>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const WithActions: Story = {
  args: {
    title: 'Atualização disponível',
    actions: (
      <>
        <Button size="sm">Atualizar agora</Button>
        <Button size="sm" variant="secondary">
          Agora não
        </Button>
      </>
    ),
  },
}
export const Applying: Story = {
  args: {
    title: 'Atualização disponível',
    actions: (
      <>
        <Button size="sm" disabled>
          Atualizando...
        </Button>
        <Button size="sm" variant="secondary" disabled>
          Agora não
        </Button>
      </>
    ),
  },
}
export const NarrowStress: Story = {
  tags: ['layout-boundary'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '18rem' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title:
      'Novas informações disponíveis para continuar acompanhando suas atividades',
    actions: (
      <>
        <Button size="sm">Ver informações</Button>
        <Button size="sm" variant="secondary">
          Agora não
        </Button>
      </>
    ),
  },
}
