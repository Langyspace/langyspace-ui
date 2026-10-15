import { PracticeCardCover } from '../PracticeCardCover'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeCoverValue } from '.'
const meta = {
  title: 'Molecules/PracticeCoverValue',
  component: PracticeCoverValue,
  tags: ['visual-review'],
  decorators: [
    (Story) => (
      <PracticeCardCover style={{ width: 260 }}>
        <Story />
      </PracticeCardCover>
    ),
  ],
  args: { children: '7' },
} satisfies Meta<typeof PracticeCoverValue>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
