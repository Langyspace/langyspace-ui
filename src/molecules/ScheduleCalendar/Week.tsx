import { useMemo, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { CalendarWeekGrid } from '../CalendarWeekGrid'
import {
  formatScheduleMinute,
  getScheduleSelection,
  isSelectableScheduleSlot,
} from './selection'
import * as Styled from './styles'
import type { ScheduleCalendarBodyProps, ScheduleCalendarSlot } from './types'

export function ScheduleCalendarWeek({
  days,
  events,
  slots,
  timeRange = { startMinute: 480, endMinute: 1320 },
  onOpenEvent,
  onSlotClick,
  onSlotSelection,
}: ScheduleCalendarBodyProps) {
  const [anchor, setAnchor] = useState<ScheduleCalendarSlot>()
  const [target, setTarget] = useState<ScheduleCalendarSlot>()
  const suppressClick = useRef(false)
  const buttons = useRef(new Map<string, HTMLButtonElement>())
  const times = Array.from(
    { length: Math.ceil((timeRange.endMinute - timeRange.startMinute) / 30) },
    (_, index) => timeRange.startMinute + index * 30,
  )
  const selected = useMemo(
    () => getScheduleSelection(days, slots, anchor, target),
    [anchor, days, slots, target],
  )
  const selectedIds = new Set(selected.map((slot) => slot.id))
  const reset = () => {
    setAnchor(undefined)
    setTarget(undefined)
  }
  const finish = (slot?: ScheduleCalendarSlot, pointer = false) => {
    if (!anchor) return
    const selection = getScheduleSelection(days, slots, anchor, slot ?? target)
    if (selection.length > 1) {
      suppressClick.current = pointer
      onSlotSelection?.(selection.map((item) => item.id))
    }
    reset()
  }
  const keyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    slot?: ScheduleCalendarSlot,
  ) => {
    suppressClick.current = false
    if (!slot) return
    if (event.key === 'Escape') {
      reset()
      return
    }
    if (anchor && event.key === 'Enter') {
      event.preventDefault()
      finish(slot)
      return
    }
    if (!event.shiftKey || !onSlotSelection || !event.key.startsWith('Arrow'))
      return
    const dayIndex = days.findIndex((day) => day.dateKey === slot.dateKey)
    const nextDay =
      dayIndex +
      (event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0)
    const nextMinute =
      slot.startMinute +
      (event.key === 'ArrowDown' ? 30 : event.key === 'ArrowUp' ? -30 : 0)
    const next = slots.find(
      (item) =>
        item.dateKey === days[nextDay]?.dateKey &&
        item.startMinute === nextMinute,
    )
    if (!next) return
    event.preventDefault()
    if (!anchor && isSelectableScheduleSlot(slot)) setAnchor(slot)
    setTarget(next)
    buttons.current.get(next.id)?.focus()
  }

  return (
    <CalendarWeekGrid onPointerLeave={reset} onPointerCancel={reset}>
      <Styled.Header />
      {days.map((day) => (
        <Styled.Header $today={day.today} key={day.id}>
          <Styled.Weekday>{day.shortLabel}</Styled.Weekday>
          <Styled.DayNumber aria-current={day.today ? 'date' : undefined}>
            {String(day.dayNumber).padStart(2, '0')}
            {day.today && <Styled.TodayDot />}
          </Styled.DayNumber>
        </Styled.Header>
      ))}
      <Styled.HourColumn aria-hidden="true">
        {times.map((minute) => (
          <Styled.Time key={minute}>{formatScheduleMinute(minute)}</Styled.Time>
        ))}
      </Styled.HourColumn>
      {days.map((day) => (
        <Styled.Column key={day.id}>
          {times.map((minute) => {
            const slot = slots.find(
              (item) =>
                item.dateKey === day.dateKey && item.startMinute === minute,
            )
            const interactive = Boolean(
              slot?.interactive && slot.state !== 'occupied',
            )
            return (
              <Styled.Slot
                key={minute}
                ref={(element) => {
                  if (slot && element) buttons.current.set(slot.id, element)
                  else if (slot) buttons.current.delete(slot.id)
                }}
                tone={
                  slot?.state === 'available' || slot?.state === 'occupied'
                    ? 'neutral'
                    : 'muted'
                }
                selected={Boolean(slot && selectedIds.has(slot.id))}
                aria-pressed={Boolean(slot && selectedIds.has(slot.id))}
                aria-label={
                  slot?.label ??
                  `${day.label} ${formatScheduleMinute(minute)} · Indisponível`
                }
                aria-disabled={!interactive}
                tabIndex={interactive ? 0 : -1}
                title={slot?.label}
                data-calendar-slot-id={slot?.id}
                data-calendar-start-minute={minute}
                onKeyDown={(event) => keyDown(event, slot)}
                onPointerDown={(event) => {
                  suppressClick.current = false
                  if (
                    event.button === 0 &&
                    event.pointerType !== 'touch' &&
                    onSlotSelection &&
                    isSelectableScheduleSlot(slot)
                  ) {
                    setAnchor(slot)
                    setTarget(slot)
                  }
                }}
                onPointerEnter={() => {
                  if (anchor && slot) setTarget(slot)
                }}
                onPointerUp={() => finish(slot, true)}
                onClick={() => {
                  if (suppressClick.current) {
                    suppressClick.current = false
                    return
                  }
                  if (interactive && slot) onSlotClick?.(slot.id)
                }}
              />
            )
          })}
          {events
            .filter((event) => event.dateKey === day.dateKey)
            .map((event) => {
              const height = (event.durationMinutes / 60) * 56 - 2
              return (
                <Styled.Event
                  key={event.id}
                  tone={event.tone ?? 'neutral'}
                  style={{
                    top:
                      ((event.startMinute - timeRange.startMinute) / 60) * 56,
                    height,
                  }}
                  aria-label={event.label}
                  title={event.label}
                  data-compact={event.durationMinutes <= 30}
                  data-calendar-class-id={event.id}
                  onClick={() => onOpenEvent(event.id)}
                >
                  <Styled.EventTime>{event.timeLabel}</Styled.EventTime>
                  <Styled.EventName>{event.title}</Styled.EventName>
                  {height > 50 && event.detail && (
                    <Styled.EventDetail>{event.detail}</Styled.EventDetail>
                  )}
                </Styled.Event>
              )
            })}
        </Styled.Column>
      ))}
    </CalendarWeekGrid>
  )
}
