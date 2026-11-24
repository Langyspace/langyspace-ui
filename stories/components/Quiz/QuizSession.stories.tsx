import type { Meta, StoryObj } from '@storybook/react-vite'
import { QuizSession } from '../../../src/components/Quiz/QuizSession'
import { PracticeResultPanel } from '../../../src/components/PracticeResultPanel/PracticeResultPanel'
const meta = {
  component: QuizSession,
  title: 'Quiz/QuizSession',
  args: {
    'aria-label': 'Quiz: Introductions',
    header: {
      name: 'Introductions',
      counter: '1/6',
      progress: 0.08,
      backLabel: 'Voltar',
      onBack: () => {},
    },
    question: {
      level: 'A1',
      counter: 'Questão 1 de 6',
      detail: 'Gramática · 6 min',
      prompt: 'Choose the correct sentence',
      options: [
        { id: 'a', label: 'I’m from Brazil' },
        { id: 'b', label: 'I from Brazil' },
      ],
      onSelect: () => {},
      hint: <p className="hint">Escolha a melhor resposta</p>,
    },
  },
} satisfies Meta<typeof QuizSession>
export default meta
type Story = StoryObj<typeof meta>
export const Initial: Story = { tags: ['visual-review'] }
export const Wrong: Story = {
  args: {
    question: {
      ...meta.args.question,
      options: [
        { id: 'a', label: 'I’m from Brazil', state: 'dim', disabled: true },
        { id: 'b', label: 'I from Brazil', state: 'wrong', disabled: true },
      ],
      feedback: {
        tone: 'wrong',
        content:
          'Para dizer de onde você é, usamos o verbo to be: I’m from Brazil. I’m é a forma curta de I am',
      },
      nextAction: { label: 'Próxima', onClick: () => {} },
    },
  },
  tags: ['visual-review'],
}
export const Narrow: Story = {
  ...Wrong,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary', 'visual-review'],
}
export const Result: Story = {
  args: {
    header: { ...meta.args.header, progress: 1, counter: '4/6' },
    question: undefined,
    children: (
      <PracticeResultPanel
        heading="Resultado"
        description="Você acertou 4 de 6 questões"
      />
    ),
  },
  tags: ['visual-review'],
}
