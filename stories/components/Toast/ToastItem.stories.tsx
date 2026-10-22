import type { Meta, StoryObj } from '@storybook/react-vite'
import { StoryStack } from '../../../.storybook/fixtures'
import { ToastItem } from '../../../src/components/Toast/ToastItem'

const meta = {
  title: 'Toast/ToastItem',
  component: ToastItem,
  tags: ['visual-review'],
  args: { message: 'As informações foram atualizadas.' },
} satisfies Meta<typeof ToastItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Tones: Story = {
  render: () => (
    <StoryStack>
      {(['neutral', 'success', 'danger', 'warning', 'brand'] as const).map(
        (tone) => (
          <ToastItem key={tone} tone={tone} message={`Mensagem ${tone}`} />
        ),
      )}
    </StoryStack>
  ),
}

export const WithAction: Story = {
  args: {
    tone: 'brand',
    title: 'Novas informações',
    message: 'Abra para consultar os detalhes.',
    actionLabel: 'Ver detalhes',
    'aria-label': 'Abrir detalhes',
    icon: <span aria-hidden="true">!</span>,
  },
}

export const Disabled: Story = { args: { disabled: true } }

export const MessageWithAction: Story = {
  args: {
    message: 'Verifique a atualização antes de tentar novamente.',
    actionLabel: 'Verificar atualização',
    'aria-label': 'Verificar atualização',
  },
}

export const LongContent: Story = {
  tags: ['layout-boundary'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '18rem' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: 'Informações importantes para acompanhamento',
    message:
      'Confira as informações atualizadas e volte quando precisar esclarecer suas dúvidas. Uma-referência-extremamente-longa-sem-espaços-para-verificar-quebra.',
    actionLabel: 'Consultar informações completas',
  },
}
