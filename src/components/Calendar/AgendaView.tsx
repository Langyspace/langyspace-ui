import { useState } from 'react'
import * as Styled from './AgendaView.styles'
import type { ScheduleCalendarProps } from './ScheduleCalendar.types'

export function AgendaView({
  days,
  events,
  slots,
  view,
  onOpenEvent,
  onSlotClick,
}: Omit<ScheduleCalendarProps, 'navigation'>) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  return (
    <Styled.Root aria-label="Agenda compacta" data-calendar-scroller="true">
      {days.map((day) => {
        if (view === 'month' && day.outsideMonth) return null
        const dayEvents = events
          .filter((event) => event.dateKey === day.dateKey)
          .sort((a, b) => a.startMinute - b.startMinute)
        const daySlots = slots
          .filter(
            (slot) =>
              slot.dateKey === day.dateKey &&
              slot.interactive &&
              slot.state !== 'occupied',
          )
          .sort((a, b) => a.startMinute - b.startMinute)
        const count = dayEvents.length + daySlots.length
        if (view === 'month' && !count && !day.today) return null
        const previewSlots = daySlots
          .filter((slot) => slot.state === 'available')
          .slice(0, 3)
        const visibleSlots = expanded[day.id] ? daySlots : previewSlots
        const remainingSlots = daySlots.length - previewSlots.length

        return (
          <Styled.Card key={day.id}>
            <Styled.Header>
              <h2>
                {day.shortLabel}, {String(day.dayNumber).padStart(2, '0')}
                {day.today ? ' · Hoje' : ''}
              </h2>
              <span>
                {dayEvents.length
                  ? `${dayEvents.length} ${dayEvents.length === 1 ? 'aula' : 'aulas'}`
                  : 'sem aulas'}
              </span>
            </Styled.Header>
            {!count ? (
              <Styled.Empty>Nenhuma aula ou horário acionável.</Styled.Empty>
            ) : (
              <Styled.Stack>
                {dayEvents.map((event) => (
                  <Styled.Event
                    key={event.id}
                    data-tone={event.tone ?? 'neutral'}
                    aria-label={event.label}
                    data-calendar-class-id={event.id}
                    onClick={() => onOpenEvent(event.id)}
                  >
                    <span>{event.timeLabel}</span>
                    <div>
                      <strong>{event.title}</strong>
                      <small>
                        {[event.badge, event.detail]
                          .filter(Boolean)
                          .join(' · ')}
                      </small>
                    </div>
                  </Styled.Event>
                ))}
                {visibleSlots.map((slot) => (
                  <Styled.Slot
                    key={slot.id}
                    data-state={slot.state}
                    aria-label={slot.label}
                    data-calendar-slot-id={slot.id}
                    onClick={() => onSlotClick?.(slot.id)}
                  >
                    <span>{slot.title ?? slot.label}</span>
                    {slot.timeLabel && <span>{slot.timeLabel}</span>}
                  </Styled.Slot>
                ))}
                {remainingSlots > 0 && (
                  <Styled.More
                    aria-expanded={Boolean(expanded[day.id])}
                    onClick={() =>
                      setExpanded((current) => ({
                        ...current,
                        [day.id]: !current[day.id],
                      }))
                    }
                  >
                    {expanded[day.id]
                      ? 'Mostrar menos horários'
                      : `Ver ${previewSlots.length ? 'mais ' : ''}${remainingSlots} horários`}
                  </Styled.More>
                )}
              </Styled.Stack>
            )}
          </Styled.Card>
        )
      })}
    </Styled.Root>
  )
}
