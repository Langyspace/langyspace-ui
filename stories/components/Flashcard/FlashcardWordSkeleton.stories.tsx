import * as StoryLayout from './FlashcardWordSkeleton.stories.styles'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardWordSkeleton } from '../../../src/components/Flashcard/FlashcardWordSkeleton'
import { FlashcardFrame } from '../../../src/components/Flashcard/FlashcardFrame'

const meta = {
  title: 'Flashcard/FlashcardWordSkeleton',
  component: FlashcardWordSkeleton,
  tags: ['visual-review'],
  decorators: [
    (Story) => (
      <FlashcardFrame>
        <StoryLayout.WordSkeletonPreview>
          <Story />
        </StoryLayout.WordSkeletonPreview>
      </FlashcardFrame>
    ),
  ],
} satisfies Meta<typeof FlashcardWordSkeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
