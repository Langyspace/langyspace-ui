import type { ScheduleCalendarDay, ScheduleCalendarSlot } from './types'

export const isSelectableScheduleSlot = (
  slot?: ScheduleCalendarSlot,
): slot is ScheduleCalendarSlot =>
  Boolean(slot?.interactive && slot.state !== 'occupied')

export const getScheduleSelection = (
  days: readonly ScheduleCalendarDay[],
  slots: readonly ScheduleCalendarSlot[],
  anchor?: ScheduleCalendarSlot,
  target?: ScheduleCalendarSlot,
) => {
  if (!isSelectableScheduleSlot(anchor) || !target) return []
  const firstDay = days.findIndex((day) => day.dateKey === anchor.dateKey)
  const lastDay = days.findIndex((day) => day.dateKey === target.dateKey)
  if (firstDay < 0 || lastDay < 0) return []
  const dates = new Set(
    days
      .slice(Math.min(firstDay, lastDay), Math.max(firstDay, lastDay) + 1)
      .map((day) => day.dateKey),
  )
  const start = Math.min(anchor.startMinute, target.startMinute)
  const end = Math.max(anchor.startMinute, target.startMinute)

  return slots.filter(
    (slot) =>
      dates.has(slot.dateKey) &&
      slot.startMinute >= start &&
      slot.startMinute <= end &&
      isSelectableScheduleSlot(slot),
  )
}

export const formatScheduleMinute = (minute: number) =>
  `${String(Math.floor(minute / 60)).padStart(2, '0')}:${String(minute % 60).padStart(2, '0')}`
