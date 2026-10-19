import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFace } from '../../../src/components/Flashcard/FlashcardFace'
import {
  FlashcardDeckCanvas,
  FlashcardFrontExample,
  FlashcardBackExample,
} from '../../../.storybook/flashcard-fixtures'
import { FlashcardFlip } from '../../../src/components/Flashcard/FlashcardFlip'

const meta = {
  title: 'Flashcard/FlashcardFace',
  component: FlashcardFace,
  tags: ['visual-review'],
  args: { children: <FlashcardFrontExample /> },
} satisfies Meta<typeof FlashcardFace>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <FlashcardDeckCanvas>
      <FlashcardFace {...args} />
    </FlashcardDeckCanvas>
  ),
}

export const Back: Story = {
  args: { side: 'back', children: <FlashcardBackExample /> },
  render: (args) => (
    <FlashcardDeckCanvas>
      <FlashcardFlip flipped>
        <FlashcardFace {...args} />
      </FlashcardFlip>
    </FlashcardDeckCanvas>
  ),
}
