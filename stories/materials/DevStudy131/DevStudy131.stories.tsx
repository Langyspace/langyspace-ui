import type { Meta, StoryObj } from '@storybook/react-vite'
import { DevStudy131Lesson } from './DevStudy131Lesson'
import { MaterialTheme } from '../shared/MaterialTheme'
const meta = {
  title: 'Materials/Developer English/Study',
  component: DevStudy131Lesson,
  decorators: [
    (Story) => (
      <MaterialTheme>
        <Story />
      </MaterialTheme>
    ),
  ],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof DevStudy131Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const Cover: Story = {}
export const Vocabulary: Story = { args: { initialPageId: 'vocabulary' } }
export const Guided: Story = { args: { initialPageId: 'guided' } }
export const Problem: Story = { args: { initialPageId: 'describe-problem' } }
export const Mentor: Story = { args: { initialPageId: 'mentor-check-in' } }
export const Listening: Story = { args: { initialPageId: 'listening' } }
export const Video: Story = { args: { initialPageId: 'video' } }
export const Homework: Story = { args: { initialPageId: 'homework' } }
export const NarrowListening: Story = {
  args: { initialPageId: 'listening' },
  globals: { viewport: { value: 'mobile1' } },
}
