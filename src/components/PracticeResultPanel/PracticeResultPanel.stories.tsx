import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { PracticeResultPanel } from './PracticeResultPanel'
import { Button } from '../Button/Button'
import { PracticeResultMark } from './PracticeResultPanel.compatibility'
import { PracticeResultTitle } from './PracticeResultPanel.compatibility'
import { PracticeResultDescription } from './PracticeResultPanel.compatibility'
import { PracticeResultActions } from './PracticeResultPanel.compatibility'

const meta = {
  title: 'PracticeResultPanel',
  component: PracticeResultPanel,
  tags: ['visual-review', 'short-viewport'],
  args: {
    children: (
      <>
        <PracticeResultMark />
        <PracticeResultTitle>Resultado</PracticeResultTitle>
        <PracticeResultDescription>
          Você acertou <strong>1</strong> de <strong>2</strong> questões.
        </PracticeResultDescription>
        <PracticeResultActions>
          <Button type="button">Refazer</Button>
          <Button type="button" variant="secondary">
            Voltar para lista
          </Button>
        </PracticeResultActions>
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
    heading: 'Resultado',
    description: 'Você acertou 0 de 2 questões.',
  },
}

export const LongContent: Story = {
  args: {
    children: (
      <>
        <PracticeResultMark />
        <PracticeResultTitle>
          Resultado da sua sessão de prática e revisão
        </PracticeResultTitle>
        <PracticeResultDescription>
          Resumo com conteúdo mais longo para conferir leitura, quebra de linha
          e espaço das ações em telas pequenas, sem calcular ou persistir dados
          na biblioteca.
        </PracticeResultDescription>
        <PracticeResultActions>
          <Button type="button">Refazer</Button>
          <Button type="button" variant="secondary">
            Voltar para lista
          </Button>
        </PracticeResultActions>
      </>
    ),
  },
}

export const Saving: Story = {
  args: {
    children: (
      <>
        <PracticeResultMark />
        <PracticeResultTitle>Resultado</PracticeResultTitle>
        <PracticeResultDescription>
          Resumo fornecido pelo produto
        </PracticeResultDescription>
        <PracticeResultDescription role="status">
          Atualizando progresso...
        </PracticeResultDescription>
        <PracticeResultActions>
          <Button type="button">Refazer</Button>
          <Button type="button" variant="secondary">
            Voltar para lista
          </Button>
        </PracticeResultActions>
      </>
    ),
  },
}

export const SaveError: Story = {
  args: {
    children: (
      <>
        <PracticeResultMark />
        <PracticeResultTitle>Resultado</PracticeResultTitle>
        <PracticeResultDescription role="alert">
          Não foi possível atualizar seu progresso agora.
        </PracticeResultDescription>
        <PracticeResultActions>
          <Button type="button">Refazer</Button>
          <Button type="button" variant="secondary">
            Voltar para lista
          </Button>
        </PracticeResultActions>
      </>
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
