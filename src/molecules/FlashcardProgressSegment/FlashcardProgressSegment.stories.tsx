import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardProgressSegment } from '.'
const meta = {
  title: 'Molecules/FlashcardProgressSegment',
  component: FlashcardProgressSegment,
  tags: ['visual-review'],
  render: (args) => (
    <div style={{ display: 'flex', width: 180 }}>
      <FlashcardProgressSegment {...args} />
    </div>
  ),
  args: { state: 'current' },
} satisfies Meta<typeof FlashcardProgressSegment>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
