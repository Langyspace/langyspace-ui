import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFlipButton } from '../../../src/components/Flashcard/FlashcardFlipButton'
import { FlashcardFrame } from '../../../src/components/Flashcard/FlashcardFrame'
import { FlashcardFront } from '../../../src/components/Flashcard/FlashcardFront'
import { FlashcardWord } from '../../../src/components/Flashcard/FlashcardWord'

const meta = {
  title: 'Flashcard/FlashcardFlipButton',
  component: FlashcardFlipButton,
  tags: ['visual-review'],
  args: { label: 'Virar card', onClick: () => undefined },
  render: (args) => (
    <FlashcardFrame>
      <FlashcardFront style={{ height: '24rem' }}>
        <FlashcardFlipButton {...args} />
        <FlashcardWord phonetic="/bɜːrd/">bird</FlashcardWord>
      </FlashcardFront>
    </FlashcardFrame>
  ),
} satisfies Meta<typeof FlashcardFlipButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
