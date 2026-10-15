import { useState } from 'react'
import * as Styled from './styles'
import type { ScheduleCalendarProps } from '../types'

export function ScheduleCalendarAgenda({
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
        const visibleSlots = expanded[day.id] ? daySlots : daySlots.slice(0, 3)
        return (
          <Styled.Card key={day.id}>
            <Styled.Header>
              <h2>
                {day.shortLabel}, {String(day.dayNumber).padStart(2, '0')}
                {day.today ? ' · Hoje' : ''}
              </h2>
              <span>
                {count
                  ? `${count} ${count === 1 ? 'item' : 'itens'}`
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
                {daySlots.length > 3 && (
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
                      : `Ver mais ${daySlots.length - 3} horários`}
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
