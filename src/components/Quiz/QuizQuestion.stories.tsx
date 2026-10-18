import type { Meta, StoryObj } from '@storybook/react-vite'
import { QuizQuestion } from './QuizQuestion'

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
