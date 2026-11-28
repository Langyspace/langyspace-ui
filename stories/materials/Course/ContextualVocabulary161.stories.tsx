import type { Meta, StoryObj } from '@storybook/react-vite'
import { CourseLesson } from './CourseLesson'

const meta = {
  title: 'Materials/Course contextual backgrounds',
  component: CourseLesson,
  parameters: { layout: 'fullscreen' },
  tags: ['visual-review', 'layout-boundary'],
  args: { materialKey: 'a2-02', initialPageId: 's2' },
} satisfies Meta<typeof CourseLesson>
export default meta
type Story = StoryObj<typeof meta>

export const A112: Story = { args: { materialKey: 'a1-12' } }
export const A202: Story = { args: { materialKey: 'a2-02' } }
export const A204: Story = { args: { materialKey: 'a2-04' } }
export const A207: Story = { args: { materialKey: 'a2-07' } }
export const A208: Story = { args: { materialKey: 'a2-08' } }
export const A209: Story = { args: { materialKey: 'a2-09' } }
export const A210: Story = { args: { materialKey: 'a2-10' } }
export const A211: Story = { args: { materialKey: 'a2-11' } }
export const A212: Story = { args: { materialKey: 'a2-12' } }
export const B101: Story = { args: { materialKey: 'b1-01' } }
export const B102: Story = { args: { materialKey: 'b1-02' } }
export const B104: Story = { args: { materialKey: 'b1-04' } }
export const B107: Story = { args: { materialKey: 'b1-07' } }
export const B108: Story = { args: { materialKey: 'b1-08' } }
export const B110: Story = { args: { materialKey: 'b1-10' } }
export const B111: Story = { args: { materialKey: 'b1-11' } }
export const B112: Story = { args: { materialKey: 'b1-12' } }
export const B201: Story = { args: { materialKey: 'b2-01' } }
export const B208: Story = { args: { materialKey: 'b2-08' } }
export const B210: Story = { args: { materialKey: 'b2-10' } }
export const C104: Story = { args: { materialKey: 'c1-04' } }
export const C111: Story = { args: { materialKey: 'c1-11' } }

export const A112Narrow: Story = {
  args: { materialKey: 'a1-12' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
}
export const A212Narrow: Story = {
  args: { materialKey: 'a2-12' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
}
export const B201Narrow: Story = {
  args: { materialKey: 'b2-01' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
}
export const C111Narrow: Story = {
  args: { materialKey: 'c1-11' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
}

export const B101Narrow: Story = {
  args: { materialKey: 'b1-01' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
}
