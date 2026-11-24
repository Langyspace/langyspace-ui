import { useState } from 'react'
import { CalendarDay } from '../../../src/components/Calendar/CalendarElements'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { MaterialQuestions } from '../shared/MaterialQuestions'

const days = ['Tue', 'Thu'] as const
const appointments = {
  Tue: { day: 'Tuesday', time: '6 pm', status: 'Busy · work' },
  Thu: { day: 'Thursday', time: '7 pm', status: 'Free' },
} as const
export function AvailabilityActivity() {
  const [selected, select] = useState<'Tue' | 'Thu'>('Thu')
  return (
    <RolePlayExercise
      presentation="instructions"
      situation=""
      steps={[]}
      completedIds={[]}
      onStepToggle={() => undefined}
      tracker={
        <MaterialQuestions
          items={[
            {
              id: 'available',
              question: 'When are you free?',
              cue: 'Use the example week',
              hint: 'I’m free on … at …',
            },
            {
              id: 'arrange',
              question: 'What day and time shall we meet?',
              cue: 'Suggest a time and ask me',
              hint: 'Are you free on … at …?',
            },
            {
              id: 'confirm',
              question: 'Can you confirm the plan?',
              cue: 'Repeat the agreed day and time, then check',
              hint: 'So, … at … Is that right?',
            },
          ]}
        />
      }
    >
      <Common.Stack>
        <Common.Heading>Example week</Common.Heading>
        <Common.Columns>
          {days.map((day) => (
            <CalendarDay
              key={day}
              day={appointments[day].day}
              presentation="vocabulary"
              selected={selected === day}
              openLabel={`Check ${appointments[day].day}`}
              onOpen={() => select(day)}
            >
              <Common.Hint>{appointments[day].time}</Common.Hint>
              <Common.Paragraph>{appointments[day].status}</Common.Paragraph>
            </CalendarDay>
          ))}
        </Common.Columns>
      </Common.Stack>
    </RolePlayExercise>
  )
}
