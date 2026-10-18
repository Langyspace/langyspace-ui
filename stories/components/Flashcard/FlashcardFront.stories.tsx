import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFront } from '../../../src/components/Flashcard/FlashcardFront'
import { FlashcardDeckCanvas } from '../../../.storybook/flashcard-fixtures'
import { FlashcardFace } from '../../../src/components/Flashcard/FlashcardFace'
import { FlashcardImagePanel } from '../../../src/components/Flashcard/FlashcardImagePanel'
import { FlashcardWord } from '../../../src/components/Flashcard/FlashcardWord'

const meta = {
  title: 'Flashcard/FlashcardFront',
  component: FlashcardFront,
  tags: ['visual-review'],
  args: {
    children: (
      <>
        <FlashcardImagePanel emoji="🐦" />
        <FlashcardWord phonetic="/bɜːrd/">bird</FlashcardWord>
      </>
    ),
  },
} satisfies Meta<typeof FlashcardFront>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <FlashcardDeckCanvas>
      <FlashcardFace>
        <FlashcardFront {...args} />
      </FlashcardFace>
    </FlashcardDeckCanvas>
  ),
}
