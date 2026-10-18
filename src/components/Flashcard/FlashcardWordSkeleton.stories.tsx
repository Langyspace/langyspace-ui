import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardWordSkeleton } from './FlashcardWordSkeleton'
import { FlashcardFrame } from './FlashcardFrame'
import { FlashcardFront } from './FlashcardFront'

const meta = {
  title: 'Flashcard/FlashcardWordSkeleton',
  component: FlashcardWordSkeleton,
  tags: ['visual-review'],
  decorators: [
    (Story) => (
      <FlashcardFrame>
        <FlashcardFront style={{ height: '24rem' }}>
          <Story />
        </FlashcardFront>
      </FlashcardFrame>
    ),
  ],
} satisfies Meta<typeof FlashcardWordSkeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
