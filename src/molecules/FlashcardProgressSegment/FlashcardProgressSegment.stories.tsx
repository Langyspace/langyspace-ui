import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardProgressSegment } from '.'
const meta = {
  title: 'Molecules/FlashcardProgressSegment',
  component: FlashcardProgressSegment,
  tags: ['visual-review'],
  args: { state: 'current', style: { width: 180, flex: 'none' } },
} satisfies Meta<typeof FlashcardProgressSegment>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
