import { lessonCanvas } from '../shared/storyViewport'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { A201Lesson } from './A201Lesson'
const meta = {
  title: 'Materials/A2.01',
  component: A201Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A2.01 · 13 continuous sections, planned 50-minute oral lesson. Exact official revision 1795045837-60e6; approved Ana/Kim illustrations and original Kim recording. Notes and progress use shared controls. Homework is live oral practice.',
      },
    },
  },
  args: { initialPageId: 's1' },
} satisfies Meta<typeof A201Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Vocabulary: Story = {
  args: { initialPageId: 's2' },
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's2')
    await userEvent.click(c.getByRole('button', { name: 'Show all' }))
    await expect(c.getByText('I’m working.', { exact: true })).toBeVisible()
  },
}
export const Actions: Story = { args: { initialPageId: 's3' } }
export const Grammar: Story = { args: { initialPageId: 's4' } }
export const Questions: Story = { args: { initialPageId: 's5' } }
export const Dialogue: Story = { args: { initialPageId: 's6' } }
export const Comprehension: Story = { args: { initialPageId: 's7' } }
export const Gaps: Story = { args: { initialPageId: 's8' } }
export const FollowUp: Story = { args: { initialPageId: 's9' } }
export const Personal: Story = { args: { initialPageId: 's10' } }
export const Listening: Story = { args: { initialPageId: 's11' } }
export const RolePlay: Story = {
  args: { initialPageId: 's12' },
  play: async ({ canvasElement }) => {
    const c = await lessonCanvas(canvasElement, 's12')
    await userEvent.click(c.getByRole('button', { name: 'Bad signal' }))
    await expect(c.getByRole('button', { name: 'Signal OK' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  },
}
export const Homework: Story = { args: { initialPageId: 's13' } }
