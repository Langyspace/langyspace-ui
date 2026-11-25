import type { Meta, StoryObj } from '@storybook/react-vite'
import { DevFirstDayLesson } from './DevFirstDayLesson'
import { MaterialTheme } from '../shared/MaterialTheme'
const meta = {
  title: 'Materials/Developer English/First day',
  component: DevFirstDayLesson,
  decorators: [
    (Story) => (
      <MaterialTheme>
        <Story />
      </MaterialTheme>
    ),
  ],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof DevFirstDayLesson>
export default meta
type Story = StoryObj<typeof meta>
export const Cover: Story = {}
export const Toolkit: Story = { args: { initialPageId: 'toolkit' } }
export const GuidedCall: Story = { args: { initialPageId: 'team-call' } }
export const Access: Story = { args: { initialPageId: 'access' } }
export const Planning: Story = { args: { initialPageId: 'planning' } }
export const Daily: Story = { args: { initialPageId: 'daily' } }
export const Demo: Story = { args: { initialPageId: 'demo' } }
export const Feedback: Story = { args: { initialPageId: 'feedback' } }
export const IndependentRolePlay: Story = {
  args: { initialPageId: 'new-situation' },
}
export const Homework: Story = { args: { initialPageId: 'homework' } }
export const NarrowCall: Story = {
  args: { initialPageId: 'team-call' },
  globals: { viewport: { value: 'mobile1' } },
}
