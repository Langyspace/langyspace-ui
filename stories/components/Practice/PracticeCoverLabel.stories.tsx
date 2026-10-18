import { PracticeCardCover } from '../../../src/components/Practice/PracticeCardCover'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeCoverLabel } from '../../../src/components/Practice/PracticeCoverLabel'

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
