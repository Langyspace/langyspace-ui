import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarTimeSlot } from '../../../src/components/Calendar/CalendarParts'

const meta = {
  title: 'Compatibility/CalendarTimeSlot',
  component: CalendarTimeSlot,
  tags: ['visual-review'],
  args: { 'aria-label': 'Segunda, 10 horas', selected: true },
} satisfies Meta<typeof CalendarTimeSlot>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Unavailable: Story = {
  args: { tone: 'muted', 'aria-disabled': true },
}
