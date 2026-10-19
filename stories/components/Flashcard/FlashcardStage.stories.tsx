import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardStage } from '../../../src/components/Flashcard/FlashcardStage'
import {
  FlashcardCanvas,
  FlashcardFrontExample,
} from '../../../.storybook/flashcard-fixtures'
import { FlashcardDeck } from '../../../src/components/Flashcard/FlashcardDeck'
import { FlashcardFace } from '../../../src/components/Flashcard/FlashcardFace'

const meta = {
  title: 'Flashcard/FlashcardStage',
  component: FlashcardStage,
  tags: ['visual-review'],
  args: {
    children: (
      <FlashcardDeck>
        <FlashcardFace>
          <FlashcardFrontExample />
        </FlashcardFace>
      </FlashcardDeck>
    ),
  },
  decorators: [
    (Story) => (
      <FlashcardCanvas>
        <Story />
      </FlashcardCanvas>
    ),
  ],
} satisfies Meta<typeof FlashcardStage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
