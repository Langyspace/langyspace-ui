import type { Meta, StoryObj } from '@storybook/react-vite'
import { A201Lesson } from './A201Lesson'
const meta = {
  title: 'Materials/A2.01',
  component: A201Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Replanned 50-minute lesson. Canonical scenes, guided conversation with questions, personal speaking, grammar, visual task, prepared ElevenLabs audio, theme-specific free conversation and offline practice.',
      },
    },
  },
  args: { initialPageId: 's1' },
} satisfies Meta<typeof A201Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Speaking1: Story = {
  args: { initialPageId: 's1' },
  tags: ['visual-review'],
}
export const Vocabulary1: Story = {
  args: { initialPageId: 's2' },
  tags: ['visual-review'],
}
export const Dialogue1: Story = {
  args: { initialPageId: 's_dialogue1' },
  tags: ['visual-review'],
}
export const Speaking2: Story = {
  args: { initialPageId: 's_personal' },
  tags: ['visual-review'],
}
export const Grammar1: Story = {
  args: { initialPageId: 's_grammar' },
  tags: ['visual-review'],
}
export const Task1: Story = {
  args: { initialPageId: 's_mission' },
  tags: ['visual-review'],
}
export const Listening1: Story = {
  args: { initialPageId: 's_listening' },
  tags: ['visual-review'],
}
export const Task2: Story = {
  args: { initialPageId: 's_reply' },
  tags: ['visual-review'],
}
export const Homework1: Story = {
  args: { initialPageId: 's_homework' },
  tags: ['visual-review'],
}
export const FreeConversation: Story = {
  args: { initialPageId: 'free-conversation' },
  tags: ['visual-review'],
}
