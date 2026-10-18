import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardSwiper } from './FlashcardSwiper'
import {
  FlashcardDeckCanvas,
  FlashcardFacesExample,
} from '../../../.storybook/flashcard-fixtures'
import { FlashcardFlip } from './FlashcardFlip'

const meta = {
  title: 'Flashcard/FlashcardSwiper',
  component: FlashcardSwiper,
  tags: ['visual-review'],
  args: {
    children: (
      <FlashcardFlip>
        <FlashcardFacesExample />
      </FlashcardFlip>
    ),
  },
  decorators: [
    (Story) => (
      <FlashcardDeckCanvas>
        <Story />
      </FlashcardDeckCanvas>
    ),
  ],
} satisfies Meta<typeof FlashcardSwiper>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Exiting: Story = { args: { exiting: true } }
