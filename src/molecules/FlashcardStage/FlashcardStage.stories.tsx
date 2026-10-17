import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardStage } from '.'
import {
  FlashcardCanvas,
  FlashcardFrontExample,
} from '../../../.storybook/flashcard-fixtures'
import { FlashcardDeck } from '../FlashcardDeck'
import { FlashcardFace } from '../FlashcardFace'

const meta = {
  title: 'Molecules/FlashcardStage',
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
