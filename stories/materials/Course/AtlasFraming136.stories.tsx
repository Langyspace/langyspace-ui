import type { Meta, StoryObj } from '@storybook/react-vite'
import { CourseLesson } from './CourseLesson'

const meta = {
  title: 'Materials/Course atlas framing',
  component: CourseLesson,
  parameters: { layout: 'fullscreen' },
  args: { materialKey: 'a1-07', initialPageId: 's2' },
} satisfies Meta<typeof CourseLesson>
export default meta
type Story = StoryObj<typeof meta>

export const Airport: Story = { tags: ['visual-review', 'layout-boundary'] }
export const Cafe: Story = {
  args: { materialKey: 'a1-10' },
  tags: ['visual-review', 'layout-boundary'],
}
export const AirportNarrow: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['visual-review', 'layout-boundary'],
}
export const CafeNarrow: Story = {
  args: { materialKey: 'a1-10' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['visual-review', 'layout-boundary'],
}
export const WeekendPlans: Story = {
  args: { materialKey: 'a2-04' },
  tags: ['visual-review', 'layout-boundary'],
}
export const Clothes: Story = {
  args: { materialKey: 'a1-11' },
  tags: ['visual-review', 'layout-boundary'],
}
export const WeekendPlansNarrow: Story = {
  args: { materialKey: 'a2-04' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['visual-review', 'layout-boundary'],
}
export const ClothesNarrow: Story = {
  args: { materialKey: 'a1-11' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['visual-review', 'layout-boundary'],
}
export const GetTogether: Story = {
  args: { materialKey: 'a2-12' },
  tags: ['visual-review', 'layout-boundary'],
}
export const GetTogetherNarrow: Story = {
  args: { materialKey: 'a2-12' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['visual-review', 'layout-boundary'],
}
