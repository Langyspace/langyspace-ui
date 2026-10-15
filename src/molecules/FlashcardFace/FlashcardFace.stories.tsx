import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFace } from '.'
import {
  FlashcardDeckCanvas,
  FlashcardFrontExample,
  FlashcardBackExample,
} from '../../../.storybook/flashcard-fixtures'
import { FlashcardFlip } from '../FlashcardFlip'
const meta = {
  title: 'Molecules/FlashcardFace',
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
