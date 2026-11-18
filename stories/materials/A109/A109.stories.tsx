import type { Meta, StoryObj } from '@storybook/react-vite'
import { A109Lesson } from './A109Lesson'

const meta = {
  title: 'Materials/A1.09',
  component: A109Lesson,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof A109Lesson>

export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Dialogue: Story = { args: { initialPageId: 's7' } }
export const WarmUp: Story = { args: { initialPageId: 's31' } }
export const RolePlay: Story = { args: { initialPageId: 's11' } }
