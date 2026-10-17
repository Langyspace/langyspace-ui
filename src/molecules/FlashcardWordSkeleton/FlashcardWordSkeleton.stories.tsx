import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardWordSkeleton } from '.'
import { FlashcardFrame } from '../FlashcardFrame'
import { FlashcardFront } from '../FlashcardFront'

const meta = {
  title: 'Molecules/FlashcardWordSkeleton',
  component: FlashcardWordSkeleton,
  tags: ['visual-review'],
  decorators: [
    (Story) => (
      <FlashcardFrame>
        <FlashcardFront style={{ height: '24rem' }}>
          <Story />
        </FlashcardFront>
      </FlashcardFrame>
    ),
  ],
} satisfies Meta<typeof FlashcardWordSkeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
