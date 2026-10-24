import type { CalendarControlsProps } from './CalendarControls.types'

export interface ScheduleCalendarDay {
  id: string
  dateKey: string
  label: string
  shortLabel: string
  dayNumber: number
  today?: boolean
  outsideMonth?: boolean
  past?: boolean
}

export interface ScheduleCalendarSlot {
  id: string
  dateKey: string
  startMinute: number
  endMinute: number
  label: string
  state: 'available' | 'occupied' | 'blocked' | 'unavailable'
  interactive: boolean
  title?: string
  timeLabel?: string
}

export interface ScheduleCalendarEvent {
  id: string
  dateKey: string
  startMinute: number
  durationMinutes: number
  timeLabel: string
  title: string
  label: string
  detail?: string
  badge?: string
  tone?: 'neutral' | 'success' | 'muted'
}

/** Copy rendered by the calendar views; every entry has a Portuguese default. */
export interface ScheduleCalendarLabels {
  agendaEmpty: string
  agendaEventCount: (count: number) => string
  agendaNoEvents: string
  calendar: string
  dayOptions: (dayLabel: string) => string
  showFewerEvents: string
  showFewerSlots: string
  showMoreEvents: (count: number) => string
  showMoreSlots: (count: number, hasPreview: boolean) => string
  today: string
  unavailableSlot: (slotLabel: string) => string
}

export interface ScheduleCalendarProps {
  view: 'week' | 'month'
  labels?: Partial<ScheduleCalendarLabels>
  days: readonly ScheduleCalendarDay[]
  events: readonly ScheduleCalendarEvent[]
  slots: readonly ScheduleCalendarSlot[]
  navigation: CalendarControlsProps
  timeRange?: { startMinute: number; endMinute: number }
  onOpenEvent: (eventId: string) => void
  onSlotClick?: (slotId: string) => void
  onSlotSelection?: (slotIds: string[]) => void
}

export type ScheduleCalendarBodyProps = Omit<
  ScheduleCalendarProps,
  'navigation' | 'view'
>
