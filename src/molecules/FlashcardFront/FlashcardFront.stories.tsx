import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFront } from '.'
import { FlashcardDeckCanvas } from '../../../.storybook/flashcard-fixtures'
import { FlashcardFace } from '../FlashcardFace'
import { FlashcardImagePanel } from '../FlashcardImagePanel'
import { FlashcardWord } from '../FlashcardWord'

const meta = {
  title: 'Molecules/FlashcardFront',
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
