import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFlipHint } from '.'
import { FlashcardCanvas } from '../../../.storybook/flashcard-fixtures'

const meta = {
  title: 'Molecules/FlashcardFlipHint',
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
