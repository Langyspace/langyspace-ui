import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFlip } from './FlashcardFlip'
import {
  FlashcardDeckCanvas,
  FlashcardFacesExample,
} from '../../../.storybook/flashcard-fixtures'

const meta = {
  title: 'Flashcard/FlashcardFlip',
  component: FlashcardFlip,
  tags: ['visual-review'],
  args: { children: <FlashcardFacesExample /> },
  decorators: [
    (Story) => (
      <FlashcardDeckCanvas>
        <Story />
      </FlashcardDeckCanvas>
    ),
  ],
} satisfies Meta<typeof FlashcardFlip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Flipped: Story = { args: { flipped: true } }
