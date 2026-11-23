import type { Meta, StoryObj } from '@storybook/react-vite'
import { C101Lesson } from './C101Lesson'
const meta = {
  title: 'Materials/C1.01 · It tends to come across as …',
  component: C101Lesson,
  parameters: { layout: 'fullscreen' },
  tags: ['visual-review'],
} satisfies Meta<typeof C101Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const Lesson: Story = { args: { initialPageId: 's1' } }
export const Expressions: Story = { args: { initialPageId: 's2' } }
export const Reading: Story = { args: { initialPageId: 's4' } }
export const DialogueOne: Story = { args: { initialPageId: 's6' } }
export const DialogueTwo: Story = { args: { initialPageId: 's62' } }
export const Grammar: Story = { args: { initialPageId: 's7' } }
export const GuidedFeedback: Story = { args: { initialPageId: 's8' } }
export const Listening: Story = { args: { initialPageId: 's9' } }
export const RolePlay: Story = { args: { initialPageId: 's11' } }
export const Homework: Story = { args: { initialPageId: 's12' } }
export const ListeningNarrow: Story = {
  args: { initialPageId: 's9' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary'],
}
export const ReadingRequest: Story = { args: { initialPageId: 's42' } }
export const DialogueThree: Story = { args: { initialPageId: 's63' } }
export const ReplyToRaj: Story = { args: { initialPageId: 's91' } }
