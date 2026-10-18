import { PracticeCardCover } from './PracticeCardCover'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeCoverLabel } from './PracticeCoverLabel'

const meta = {
  title: 'Practice/PracticeCoverLabel',
  component: PracticeCoverLabel,
  tags: ['visual-review'],
  decorators: [
    (Story) => (
      <PracticeCardCover style={{ width: 260 }}>
        <Story />
      </PracticeCardCover>
    ),
  ],
  args: { children: 'Itens para revisar' },
} satisfies Meta<typeof PracticeCoverLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
