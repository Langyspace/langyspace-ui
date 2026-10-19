import type { Meta, StoryObj } from '@storybook/react-vite'
import { QuizPromptHeader } from '../../../src/components/Quiz/QuizPromptHeader'

const meta = {
  title: 'Quiz/QuizPromptHeader',
  component: QuizPromptHeader,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof QuizPromptHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
