import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFeedback } from '.'
import { FlashcardDeckCanvas } from '../../../.storybook/flashcard-fixtures'

const meta = {
  title: 'Molecules/FlashcardFeedback',
  component: FlashcardFeedback,
  tags: ['visual-review'],
  args: {
    grade: 'good',
    mark: '✓',
    children: 'Very good!',
    next: 'volta amanhã',
  },
  decorators: [
    (Story) => (
      <FlashcardDeckCanvas>
        <Story />
      </FlashcardDeckCanvas>
    ),
  ],
} satisfies Meta<typeof FlashcardFeedback>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Again: Story = {
  args: {
    grade: 'again',
    mark: '↻',
    children: 'Vamos tentar de novo',
    next: 'volta em 1 minuto',
  },
}

export const Hard: Story = {
  args: {
    grade: 'hard',
    mark: '!',
    children: 'Quase lá',
    next: 'volta em 10 minutos',
  },
}

export const Easy: Story = {
  args: {
    grade: 'easy',
    mark: '★',
    children: 'Excellent!',
    next: 'volta em 15 dias',
  },
}
