import type { Meta, StoryObj } from '@storybook/react-vite'
import { A107Lesson } from './A107Lesson'

const meta = {
  title: 'Materials/A1.07',
  component: A107Lesson,
  parameters: { layout: 'fullscreen' },
  args: { initialPageId: 's1' },
} satisfies Meta<typeof A107Lesson>

export default meta
type Story = StoryObj<typeof meta>

export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Vocabulary: Story = { args: { initialPageId: 's2' } }
export const WarmUp: Story = { args: { initialPageId: 's31' } }
export const Pronunciation: Story = { args: { initialPageId: 's51' } }
export const Dialogue: Story = { args: { initialPageId: 's61' } }
export const Questions: Story = { args: { initialPageId: 's63' } }
export const YourTrip: Story = { args: { initialPageId: 's81' } }
export const Listening: Story = { args: { initialPageId: 's9' } }
export const RolePlay: Story = { args: { initialPageId: 's11' } }
