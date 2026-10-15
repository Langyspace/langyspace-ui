import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardGhost } from '.'
import { FlashcardDeckCanvas } from '../../../.storybook/flashcard-fixtures'
const meta = {
  title: 'Molecules/FlashcardGhost',
  component: FlashcardGhost,
  tags: ['visual-review'],
  args: { layer: 1 },
  decorators: [
    (Story) => (
      <FlashcardDeckCanvas>
        <Story />
      </FlashcardDeckCanvas>
    ),
  ],
} satisfies Meta<typeof FlashcardGhost>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const Obscured: Story = { args: { obscured: true } }
