import type { Meta, StoryObj } from '@storybook/react-vite'
import { QuizBadge } from '../../../src/components/Quiz/QuizBadge'

const meta = {
  title: 'Quiz/QuizBadge',
  component: QuizBadge,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof QuizBadge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
