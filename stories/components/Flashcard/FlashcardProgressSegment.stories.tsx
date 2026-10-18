import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardProgressSegment } from '../../../src/components/Flashcard/FlashcardProgressSegment'
import { FlashcardCanvas } from '../../../.storybook/flashcard-fixtures'

const meta = {
  title: 'Flashcard/FlashcardProgressSegment',
  component: FlashcardProgressSegment,
  tags: ['visual-review'],
  args: { state: 'current', style: { width: 180, flex: 'none' } },
  decorators: [
    (Story) => (
      <FlashcardCanvas>
        <Story />
      </FlashcardCanvas>
    ),
  ],
} satisfies Meta<typeof FlashcardProgressSegment>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Done: Story = { args: { state: 'done' } }
export const Pending: Story = { args: { state: 'pending' } }
