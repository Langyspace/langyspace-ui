import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardImagePanel } from './FlashcardImagePanel'
import { FlashcardFaceCanvas } from '../../../.storybook/flashcard-fixtures'

const meta = {
  title: 'Flashcard/FlashcardImagePanel',
  component: FlashcardImagePanel,
  tags: ['visual-review'],
  args: { emoji: '🐦' },
  decorators: [
    (Story) => (
      <FlashcardFaceCanvas>
        <Story />
      </FlashcardFaceCanvas>
    ),
  ],
} satisfies Meta<typeof FlashcardImagePanel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
