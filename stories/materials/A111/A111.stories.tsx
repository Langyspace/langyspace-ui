import type { Meta, StoryObj } from '@storybook/react-vite'
import { A111Lesson } from './A111Lesson'

const meta = {
  title: 'Materials/A1.11',
  component: A111Lesson,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof A111Lesson>

export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Dialogue: Story = { args: { initialPageId: 's7' } }
export const WarmUp: Story = { args: { initialPageId: 's31' } }
export const RolePlay: Story = { args: { initialPageId: 's11' } }
