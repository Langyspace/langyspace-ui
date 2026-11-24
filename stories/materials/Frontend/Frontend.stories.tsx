import type { Meta, StoryObj } from '@storybook/react-vite'
import { FrontendLesson } from './FrontendLesson'
const meta = {
  title: 'Materials/Frontend',
  component: FrontendLesson,
  parameters: { layout: 'fullscreen' },
  args: { initialPageId: 's1' },
} satisfies Meta<typeof FrontendLesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Vocabulary: Story = { args: { initialPageId: 's2' } }
export const WarmUp: Story = { args: { initialPageId: 's31' } }
export const HiddenOptions: Story = { args: { initialPageId: 's32' } }
export const Profile: Story = { args: { initialPageId: 's33' } }
export const Pronunciation: Story = { args: { initialPageId: 's51' } }
export const Dialogue: Story = { args: { initialPageId: 's6' } }
export const Grammar: Story = { args: { initialPageId: 's7' } }
export const YourVersion: Story = { args: { initialPageId: 's8' } }
export const Listening: Story = { args: { initialPageId: 's9' } }
export const Review: Story = { args: { initialPageId: 's10' } }
export const Interview: Story = { args: { initialPageId: 's11' } }
export const Homework: Story = {
  args: {
    initialPageId: 's12',
    studentPortalOrigin: 'https://student.staging.langy.space',
  },
}
