import { PracticeCardCover } from '../PracticeCardCover'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeLevelBadge } from '.'
const meta = {
  title: 'Molecules/PracticeLevelBadge',
  component: PracticeLevelBadge,
  tags: ['visual-review'],
  decorators: [
    (Story) => (
      <PracticeCardCover style={{ width: 260 }}>
        <Story />
      </PracticeCardCover>
    ),
  ],
  args: { children: 'A1' },
} satisfies Meta<typeof PracticeLevelBadge>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
