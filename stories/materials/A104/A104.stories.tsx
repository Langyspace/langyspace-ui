import type { Meta, StoryObj } from '@storybook/react-vite'
import { A104Lesson } from './A104Lesson'

const meta = {
  title: 'Materials/A1.04',
  component: A104Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Plano79 de rotina e disponibilidade: vocabulário visual, conversa, prática pessoal, gramática, calendário e escuta com continuação.',
      },
    },
  },
  args: { initialPageId: 's1', learnerName: '' },
} satisfies Meta<typeof A104Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Vocabulary: Story = { args: { initialPageId: 's2' } }
export const DaysAndTimes: Story = {
  args: { initialPageId: 's11' },
  tags: ['visual-review'],
}
export const TimesOfDay: Story = {
  args: { initialPageId: 's31' },
  tags: ['visual-review'],
}
export const PersonalConversation: Story = { args: { initialPageId: 's82' } }
export const ReplyToKim: Story = { args: { initialPageId: 's91' } }
export const Dialogue: Story = { args: { initialPageId: 's6' } }
export const Grammar: Story = { args: { initialPageId: 's7' } }
export const Listening: Story = {
  args: { initialPageId: 's9', learnerName: 'Carla' },
}
export const RolePlay: Story = { args: { initialPageId: 's11' } }
