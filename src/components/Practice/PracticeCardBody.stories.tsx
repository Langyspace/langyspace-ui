import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeCardBody } from './PracticeCardBody'

const meta = {
  title: 'Practice/PracticeCardBody',
  component: PracticeCardBody,
  tags: ['visual-review'],
  args: {
    title: 'Conversação do dia a dia',
    leadingMeta: '4/8 cards',
    trailingMeta: '50%',
    value: 0.5,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '20rem',
          border: '1px solid #ececea',
          borderRadius: '1rem',
          overflow: 'hidden',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PracticeCardBody>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Completed: Story = {
  args: {
    completed: true,
    leadingMeta: 'LIÇÃO 01',
    trailingMeta: 'Refazer para reforçar',
    value: 1,
  },
}

export const LongContent: Story = {
  args: {
    title: 'Vocabulário para conversar sobre viagens e situações de trabalho',
    leadingMeta: 'Vocabulário personalizado',
    trailingMeta: 'Refazer para reforçar',
  },
  render: (args) => (
    <div style={{ maxWidth: '16.875rem' }}>
      <PracticeCardBody {...args} />
    </div>
  ),
}
