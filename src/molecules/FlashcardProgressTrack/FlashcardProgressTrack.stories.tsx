import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardProgressTrack } from '.'
import { FlashcardCanvas } from '../../../.storybook/flashcard-fixtures'
import { FlashcardProgressSegment } from '../FlashcardProgressSegment'
const meta = {
  title: 'Molecules/FlashcardProgressTrack',
  component: FlashcardProgressTrack,
  tags: ['visual-review'],
  args: {
    children: (
      <>
        <FlashcardProgressSegment state="done" />
        <FlashcardProgressSegment state="current" />
        <FlashcardProgressSegment />
        <FlashcardProgressSegment />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <FlashcardCanvas>
        <Story />
      </FlashcardCanvas>
    ),
  ],
} satisfies Meta<typeof FlashcardProgressTrack>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
