import type { Meta, StoryObj } from '@storybook/react-vite'
import { QuizQuestion } from '../../../src/components/Quiz/QuizQuestion'

const meta = {
  title: 'Quiz/QuizQuestion',
  component: QuizQuestion,
  tags: ['visual-review'],
  args: {
    children:
      'Uma pergunta com texto longo para leitura confortável no celular.',
  },
} satisfies Meta<typeof QuizQuestion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Compact: Story = {
  args: {
    density: 'compact',
    children: 'I’ve been cycling to work for a month.',
  },
}
