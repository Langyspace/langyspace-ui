import type { Meta, StoryObj } from '@storybook/react-vite'
import { QuizFeedback } from './QuizFeedback'

const meta = {
  title: 'Quiz/QuizFeedback',
  component: QuizFeedback,
  tags: ['visual-review'],
  args: { tone: 'correct', children: 'Boa resposta.' },
} satisfies Meta<typeof QuizFeedback>

export default meta

type Story = StoryObj<typeof meta>

export const Correct: Story = {}

export const Wrong: Story = {
  args: { tone: 'wrong', children: 'Revise esta resposta.' },
}

export const LongContent: Story = {
  args: {
    tone: 'wrong',
    children: (
      <div>
        <strong>Revise.</strong>
        <p>
          Uma explicação longa mantém o texto do produto e permite conferir a
          leitura e a quebra de linha em uma tela estreita.
        </p>
      </div>
    ),
  },
}
