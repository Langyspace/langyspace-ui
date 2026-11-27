import type { Meta, StoryObj } from '@storybook/react-vite'
import { A106Lesson } from './A106Lesson'
const meta = {
  title: 'Materials/A1.06',
  component: A106Lesson,
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
} satisfies Meta<typeof A106Lesson>
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
export const Vocabulary2: Story = {
  args: { initialPageId: 's41' },
  tags: ['visual-review'],
}
export const Vocabulary3: Story = {
  args: { initialPageId: 's4' },
  tags: ['visual-review'],
}
export const Dialogue1: Story = {
  args: { initialPageId: 's7' },
  tags: ['visual-review'],
}
export const Speaking2: Story = {
  args: { initialPageId: 's91' },
  tags: ['visual-review'],
}
export const Grammar1: Story = {
  args: { initialPageId: 's81' },
  tags: ['visual-review'],
}
export const Task1: Story = {
  args: { initialPageId: 's12' },
  tags: ['visual-review'],
}
export const Listening1: Story = {
  args: { initialPageId: 's10' },
  tags: ['visual-review'],
}
export const Page1: Story = {
  args: { initialPageId: 's101' },
  tags: ['visual-review'],
}
export const Homework1: Story = {
  args: { initialPageId: 's13' },
  tags: ['visual-review'],
}
export const FreeConversation: Story = {
  args: { initialPageId: 'free-conversation' },
  tags: ['visual-review'],
}
