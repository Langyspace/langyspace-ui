import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFrame } from '.'
import { FlashcardSessionExample } from '../../../.storybook/flashcard-fixtures'
const meta = {
  title: 'Molecules/FlashcardFrame',
  component: FlashcardFrame,
  tags: ['visual-review'],
  args: { children: <FlashcardSessionExample /> },
} satisfies Meta<typeof FlashcardFrame>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const Flipped: Story = {
  args: { children: <FlashcardSessionExample initiallyFlipped /> },
}
