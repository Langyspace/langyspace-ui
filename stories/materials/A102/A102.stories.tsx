import type { Meta, StoryObj } from '@storybook/react-vite'
import { A102Lesson } from './A102Lesson'

const meta = {
  title: 'Materials/A1.02',
  component: A102Lesson,
  parameters: { layout: 'fullscreen' },
  args: { initialPageId: 's1' },
} satisfies Meta<typeof A102Lesson>

export default meta
type Story = StoryObj<typeof meta>

export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Dialogue: Story = { args: { initialPageId: 's7' } }
export const WarmUp: Story = { args: { initialPageId: 's31' } }
export const Challenge: Story = { args: { initialPageId: 's162' } }
export const RolePlay: Story = { args: { initialPageId: 's11' } }
