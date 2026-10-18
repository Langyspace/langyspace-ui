import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScheduleCalendar } from '../../../src/components/Calendar/ScheduleCalendar'
import { scheduleCalendarFixture } from '../../../src/components/Calendar/calendarFixtures'

const meta = {
  title: 'Calendar/ScheduleCalendar',
  component: ScheduleCalendar,
  tags: ['visual-review'],
  parameters: { layout: 'fullscreen' },
  args: scheduleCalendarFixture,
} satisfies Meta<typeof ScheduleCalendar>

export default meta

type Story = StoryObj<typeof meta>

export const Week: Story = {}
export const Month: Story = { args: { view: 'month' } }
export const Empty: Story = { args: { events: [], slots: [] } }

export const LongNames: Story = {
  args: {
    events: scheduleCalendarFixture.events.map((event) => ({
      ...event,
      title: 'Maria Fernanda de Albuquerque Nogueira',
      label: 'Maria Fernanda de Albuquerque Nogueira · ' + event.timeLabel,
    })),
  },
}
