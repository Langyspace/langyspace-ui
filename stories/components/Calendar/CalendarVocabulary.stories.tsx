import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  CalendarDay,
  CalendarMonthGrid,
} from '../../../src/components/Calendar/CalendarElements'
import * as StoryLayout from '../Exercise/ExerciseComponents.stories.styles'

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]
function WeeklyWords() {
  const [selected, setSelected] = useState('Monday')
  return (
    <CalendarMonthGrid
      density="compact"
      role="group"
      aria-label="Days of the week"
    >
      {days.map((day) => (
        <CalendarDay
          key={day}
          day={day}
          presentation="vocabulary"
          selected={selected === day}
          openLabel={`Select ${day}`}
          onOpen={() => setSelected(day)}
        />
      ))}
    </CalendarMonthGrid>
  )
}
const meta = {
  title: 'Calendar/Vocabulary',
  component: WeeklyWords,
  tags: ['visual-review'],
  render: () => (
    <StoryLayout.Preview>
      <WeeklyWords />
    </StoryLayout.Preview>
  ),
} satisfies Meta<typeof WeeklyWords>
export default meta
type Story = StoryObj<typeof meta>
export const Week: Story = {}
export const Narrow: Story = {
  render: () => (
    <StoryLayout.Narrow>
      <StoryLayout.Preview>
        <WeeklyWords />
      </StoryLayout.Preview>
    </StoryLayout.Narrow>
  ),
}
