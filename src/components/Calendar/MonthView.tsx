import { useState } from 'react'
import {
  CalendarDay,
  CalendarDayNumber,
  CalendarMonthGrid,
} from './CalendarElements'
import * as Styled from './ScheduleCalendar.styles'
import type { ScheduleCalendarBodyProps } from './ScheduleCalendar.types'
import { resolveScheduleCalendarLabels } from './scheduleCalendarLabels'

export function MonthView({
  days,
  events,
  labels,
  slots,
  onOpenEvent,
  onSlotClick,
}: ScheduleCalendarBodyProps) {
  const text = resolveScheduleCalendarLabels(labels)
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  return (
    <div>
      <Styled.MonthWeekdays>
        {days.slice(0, 7).map((day) => (
          <Styled.MonthWeekday key={day.id}>
            {day.shortLabel}
          </Styled.MonthWeekday>
        ))}
      </Styled.MonthWeekdays>
      <CalendarMonthGrid>
        {days.map((day) => {
          const daySlots = slots.filter((slot) => slot.dateKey === day.dateKey)
          const dayEvents = events
            .filter((event) => event.dateKey === day.dateKey)
            .sort((first, second) => first.startMinute - second.startMinute)
          const actionable = day.outsideMonth
            ? undefined
            : daySlots.find(
                (slot) => slot.interactive && slot.state !== 'occupied',
              )
          const available = daySlots.some((slot) => slot.state === 'available')

          return (
            <CalendarDay
              key={day.id}
              muted={
                day.outsideMonth ||
                day.past ||
                (!available && dayEvents.length === 0)
              }
              day={
                <CalendarDayNumber
                  aria-current={day.today ? 'date' : undefined}
                >
                  {day.dayNumber}
                </CalendarDayNumber>
              }
              {...(actionable && onSlotClick
                ? {
                    openLabel: text.dayOptions(day.label),
                    onOpen: () => {
                      onSlotClick(actionable.id)
                    },
                  }
                : { onOpen: undefined, openLabel: undefined })}
            >
              <Styled.MonthEvents>
                {(expanded[day.id] ? dayEvents : dayEvents.slice(0, 3)).map(
                  (event) => (
                    <Styled.MonthEvent
                      key={event.id}
                      tone={event.tone ?? 'neutral'}
                      aria-label={event.label}
                      title={event.label}
                      data-calendar-class-id={event.id}
                      onClick={() => {
                        onOpenEvent(event.id)
                      }}
                    >
                      <Styled.EventTime>{event.timeLabel}</Styled.EventTime>
                      {event.badge && (
                        <Styled.Badge>{event.badge}</Styled.Badge>
                      )}
                      <Styled.EventName>{event.title}</Styled.EventName>
                    </Styled.MonthEvent>
                  ),
                )}
                {dayEvents.length > 3 && (
                  <Styled.More
                    aria-expanded={Boolean(expanded[day.id])}
                    onClick={() => {
                      setExpanded((current) => ({
                        ...current,
                        [day.id]: !current[day.id],
                      }))
                    }}
                  >
                    {expanded[day.id]
                      ? text.showFewerEvents
                      : text.showMoreEvents(dayEvents.length - 3)}
                  </Styled.More>
                )}
              </Styled.MonthEvents>
            </CalendarDay>
          )
        })}
      </CalendarMonthGrid>
    </div>
  )
}
