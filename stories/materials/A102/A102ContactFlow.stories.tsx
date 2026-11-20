import type { Meta, StoryObj } from '@storybook/react-vite'
import { A102Lesson } from './A102Lesson'

const meta = {
  title: 'Materials/A1.02 Contact flow',
  component: A102Lesson,
  parameters: { layout: 'fullscreen' },
  args: { initialPageId: 's8', learnerName: '' },
} satisfies Meta<typeof A102Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CoherentDialogueTitle: Story = {
  args: { initialPageId: 's8' },
  tags: ['visual-review'],
}
export const SpellingRecognition: Story = { args: { initialPageId: 's7' } }
export const IncomingCall: Story = {
  args: { initialPageId: 's14' },
  tags: ['visual-review'],
}
export const ReceptionWorkstation: Story = {
  args: { initialPageId: 's13' },
  tags: ['visual-review'],
}
export const OutgoingCall: Story = {
  args: { initialPageId: 's15' },
  tags: ['visual-review'],
}
export const VoiceMessage: Story = {
  args: { initialPageId: 's16' },
  tags: ['visual-review'],
}

export const OutgoingTeacherFallback: Story = {
  args: { initialPageId: 's15' },
  tags: ['visual-review', 'layout-boundary'],
}

export const AlphabetWithPortugueseTips: Story = {
  args: { initialPageId: 's6' },
  tags: ['visual-review'],
}
