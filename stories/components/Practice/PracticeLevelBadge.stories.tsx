import { PracticeCardCover } from '../../../src/components/Practice/PracticeCardCover'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeLevelBadge } from '../../../src/components/Practice/PracticeLevelBadge'

const meta = {
  title: 'Practice/PracticeLevelBadge',
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
