import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { PracticeResultPanel } from '../../../src/components/PracticeResultPanel/PracticeResultPanel'
import { Button } from '../../../src/components/Button/Button'

const meta = {
  title: 'PracticeResultPanel',
  component: PracticeResultPanel,
  tags: ['visual-review', 'short-viewport'],
  args: {
    heading: 'Resultado',
    description: (
      <>
        Você acertou <strong>1</strong> de <strong>2</strong> questões.
      </>
    ),
    actions: (
      <>
        <Button type="button">Refazer</Button>
        <Button type="button" variant="secondary">
          Voltar para lista
        </Button>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '30rem', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PracticeResultPanel>
export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const ContentProps: Story = {
  args: {
    children: '0 · 2 · 0%',
    description: 'Você acertou 0 de 2 questões.',
  },
}
export const LongContent: Story = {
  args: {
    heading: 'Resultado da sua sessão de prática e revisão',
    description:
      'Resumo com conteúdo mais longo para conferir leitura, quebra de linha e espaço das ações em telas pequenas, sem calcular ou persistir dados na biblioteca.',
  },
}
export const Saving: Story = {
  args: {
    description: 'Resumo fornecido pelo produto',
    children: <p role="status">Atualizando progresso...</p>,
  },
}
export const SaveError: Story = {
  args: {
    description: undefined,
    children: (
      <p role="alert">Não foi possível atualizar seu progresso agora.</p>
    ),
  },
}
export const Focused: Story = {
  play: async ({ canvasElement }) => {
    const buttons = within(canvasElement).getAllByRole('button')
    await userEvent.tab()
    await expect(buttons[0]).toHaveFocus()
    await userEvent.tab()
    await expect(buttons[1]).toHaveFocus()
  },
}
