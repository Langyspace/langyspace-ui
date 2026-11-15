import * as StoryLayout from './PracticeCardBody.stories.styles'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeCardBody } from '../../../src/components/Practice/PracticeCardBody'

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
      <StoryLayout.PracticeLessonPreview>
        <Story />
      </StoryLayout.PracticeLessonPreview>
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
    <StoryLayout.CompletedLessonPreview>
      <PracticeCardBody {...args} />
    </StoryLayout.CompletedLessonPreview>
  ),
}
