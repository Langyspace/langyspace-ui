import type { Meta, StoryObj } from '@storybook/react-vite'
import { TrialB2Lesson } from './TrialB2Lesson'
const meta = {
  title: 'Materials/B2 Trial',
  component: TrialB2Lesson,
  parameters: { layout: 'fullscreen' },
  args: { initialPageId: 's1' },
} satisfies Meta<typeof TrialB2Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const PictureTalk: Story = { args: { initialPageId: 's2' } }
export const Dialogue: Story = { args: { initialPageId: 's3' } }
export const WorkLocation: Story = { args: { initialPageId: 's41' } }
export const WorkSchedule: Story = { args: { initialPageId: 's42' } }
export const Priorities: Story = { args: { initialPageId: 's43' } }
export const Conversation: Story = { args: { initialPageId: 's5' } }
export const Reflection: Story = { args: { initialPageId: 's6' } }
