import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardDeck } from './FlashcardDeck'
import {
  FlashcardCanvas,
  FlashcardFrontExample,
} from '../../../.storybook/flashcard-fixtures'
import { FlashcardFace } from './FlashcardFace'

const meta = {
  title: 'Flashcard/FlashcardDeck',
  component: FlashcardDeck,
  tags: ['visual-review'],
  args: {
    children: (
      <FlashcardFace>
        <FlashcardFrontExample />
      </FlashcardFace>
    ),
  },
  decorators: [
    (Story) => (
      <FlashcardCanvas>
        <Story />
      </FlashcardCanvas>
    ),
  ],
} satisfies Meta<typeof FlashcardDeck>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
