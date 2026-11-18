import type { Meta, StoryObj } from '@storybook/react-vite'
import { A108Lesson } from './A108Lesson'

const meta = {
  title: 'Materials/A1.08',
  component: A108Lesson,
  parameters: { layout: 'fullscreen' },
  args: { initialPageId: 's1' },
} satisfies Meta<typeof A108Lesson>

export default meta
type Story = StoryObj<typeof meta>

export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Dialogue: Story = { args: { initialPageId: 's7' } }
export const Vocabulary: Story = { args: { initialPageId: 's5' } }
export const WarmUp: Story = { args: { initialPageId: 's31' } }
export const MakeAnOrder: Story = { args: { initialPageId: 's42' } }
export const Challenge: Story = { args: { initialPageId: 's162' } }
export const RolePlay: Story = { args: { initialPageId: 's11' } }
