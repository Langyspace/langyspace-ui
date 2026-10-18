import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardCounter } from '../../../src/components/Flashcard/FlashcardCounter'
import { FlashcardCanvas } from '../../../.storybook/flashcard-fixtures'

const meta = {
  title: 'Flashcard/FlashcardCounter',
  component: FlashcardCounter,
  tags: ['visual-review'],
  args: { children: '3 / 12' },
  decorators: [
    (Story) => (
      <FlashcardCanvas>
        <Story />
      </FlashcardCanvas>
    ),
  ],
} satisfies Meta<typeof FlashcardCounter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
