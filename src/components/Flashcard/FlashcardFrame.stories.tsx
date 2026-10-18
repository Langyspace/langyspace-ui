import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  BoundedFlashcardExample,
  BoundedCompletionExample,
} from '../../../.storybook/compact-practice-fixtures'
import { FlashcardFrame } from './FlashcardFrame'
import { FlashcardSessionExample } from '../../../.storybook/flashcard-fixtures'

const meta = {
  title: 'Flashcard/FlashcardFrame',
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

export const LimitedHeight: Story = {
  render: () => <BoundedFlashcardExample />,
}

export const LongContent: Story = {
  render: () => <BoundedFlashcardExample longContent />,
}

export const Completed: Story = {
  render: () => <BoundedCompletionExample />,
}
