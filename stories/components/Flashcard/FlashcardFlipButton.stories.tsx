import * as StoryLayout from './FlashcardFlipButton.stories.styles'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFlipButton } from '../../../src/components/Flashcard/FlashcardFlipButton'
import { FlashcardFrame } from '../../../src/components/Flashcard/FlashcardFrame'

import { FlashcardWord } from '../../../src/components/Flashcard/FlashcardWord'

const meta = {
  title: 'Flashcard/FlashcardFlipButton',
  component: FlashcardFlipButton,
  tags: ['visual-review'],
  args: { label: 'Virar card', onClick: () => undefined },
  render: (args) => (
    <FlashcardFrame>
      <StoryLayout.FlipButtonPreview>
        <FlashcardFlipButton {...args} />
        <FlashcardWord phonetic="/bɜːrd/">bird</FlashcardWord>
      </StoryLayout.FlipButtonPreview>
    </FlashcardFrame>
  ),
} satisfies Meta<typeof FlashcardFlipButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
