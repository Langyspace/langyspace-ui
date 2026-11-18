import type { Meta, StoryObj } from '@storybook/react-vite'
import { A110Lesson } from './A110Lesson'

const meta = {
  title: 'Materials/A1.10',
  component: A110Lesson,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof A110Lesson>

export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Dialogue: Story = { args: { initialPageId: 's7' } }
export const WarmUp: Story = { args: { initialPageId: 's31' } }
export const RolePlay: Story = { args: { initialPageId: 's11' } }
