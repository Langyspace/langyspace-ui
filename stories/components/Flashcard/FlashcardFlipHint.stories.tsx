import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFlipHint } from '../../../src/components/Flashcard/FlashcardFlipHint'
import { FlashcardCanvas } from '../../../.storybook/flashcard-fixtures'

const meta = {
  title: 'Flashcard/FlashcardFlipHint',
  component: FlashcardFlipHint,
  tags: ['visual-review'],
  args: { children: 'Toque no cartão para ver a tradução' },
  decorators: [
    (Story) => (
      <FlashcardCanvas>
        <Story />
      </FlashcardCanvas>
    ),
  ],
} satisfies Meta<typeof FlashcardFlipHint>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
