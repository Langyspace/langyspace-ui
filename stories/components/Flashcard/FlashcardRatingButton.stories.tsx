import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardRatingButton } from '../../../src/components/Flashcard/FlashcardRatingButton'
import { FlashcardCanvas } from '../../../.storybook/flashcard-fixtures'

const meta = {
  title: 'Flashcard/FlashcardRatingButton',
  component: FlashcardRatingButton,
  tags: ['visual-review'],
  args: { grade: 'good', children: 'Bom', interval: '4 dias' },
  decorators: [
    (Story) => (
      <FlashcardCanvas>
        <div style={{ maxWidth: '8rem' }}>
          <Story />
        </div>
      </FlashcardCanvas>
    ),
  ],
} satisfies Meta<typeof FlashcardRatingButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Again: Story = {
  args: {
    grade: 'again',
    children: 'Errei',
    selected: true,
    interval: '1 min',
  },
}

export const Hard: Story = {
  args: {
    grade: 'hard',
    children: 'Difícil',
    selected: true,
    interval: '10 min',
  },
}

export const Good: Story = { args: { selected: true } }

export const Easy: Story = {
  args: {
    grade: 'easy',
    children: 'Fácil',
    selected: true,
    interval: '15 dias',
  },
}

export const Disabled: Story = { args: { disabled: true } }

export const Focused: Story = {
  play: ({ canvasElement }) => {
    canvasElement.querySelector('button')?.focus()
  },
}
