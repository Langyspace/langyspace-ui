import type { Meta, StoryObj } from '@storybook/react-vite'
import { CourseLesson } from './CourseLesson'
import goals from './course-goals81.json'
const meta = {
  title: 'Materials/Course · A1–C1',
  component: CourseLesson,
  parameters: { layout: 'fullscreen' },
  args: { materialKey: 'a2-02', initialPageId: 's1' },
  argTypes: { materialKey: { control: 'select', options: Object.keys(goals) } },
} satisfies Meta<typeof CourseLesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const VisualStory: Story = {
  args: { materialKey: 'a2-02', initialPageId: 's_mission' },
  tags: ['visual-review'],
}
export const OrderPictures: Story = {
  args: { materialKey: 'a2-03', initialPageId: 's_mission' },
  tags: ['visual-review', 'layout-boundary'],
}
export const CompareApartments: Story = {
  args: { materialKey: 'a2-10', initialPageId: 's_mission' },
  tags: ['visual-review'],
}
export const ChangesOnTheMap: Story = {
  args: { materialKey: 'b1-02', initialPageId: 's_mission' },
  tags: ['visual-review'],
}
export const ConflictingSources: Story = {
  args: { materialKey: 'c1-12', initialPageId: 's_source0' },
  tags: ['visual-review', 'layout-boundary'],
}
export const Listening: Story = {
  args: { materialKey: 'c1-12', initialPageId: 's_listening' },
  tags: ['visual-review'],
}
export const FreeConversation: Story = {
  args: { materialKey: 'b2-12', initialPageId: 'free-conversation' },
  tags: ['visual-review'],
}
