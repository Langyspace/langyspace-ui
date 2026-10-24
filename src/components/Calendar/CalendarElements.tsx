import * as CalendarDayStyles from './CalendarDay.styles'
import type {
  CalendarMonthGridProps,
  CalendarWeekGridProps,
  CalendarDayProps,
  CalendarDayNumberProps,
  CalendarEventProps,
  TimelineEventProps,
  CalendarTimeSlotProps,
} from './CalendarElements.types'
import * as Styled from './CalendarElements.styles'

export function CalendarMonthGrid({
  children,
  ...props
}: CalendarMonthGridProps) {
  return (
    <Styled.CalendarMonthGridRoot {...props}>
      {children}
    </Styled.CalendarMonthGridRoot>
  )
}

export function CalendarWeekGrid({
  children,
  ...props
}: CalendarWeekGridProps) {
  return (
    <Styled.CalendarWeekGridRoot {...props}>
      {children}
    </Styled.CalendarWeekGridRoot>
  )
}

export function CalendarDay({
  day,
  children,
  muted = false,
  onOpen,
  openLabel,
  ...props
}: CalendarDayProps) {
  return (
    <CalendarDayStyles.Root
      {...props}
      data-muted={muted}
      data-interactive={Boolean(onOpen)}
    >
      {onOpen ? (
        <CalendarDayStyles.OpenButton
          aria-label={openLabel}
          onClick={onOpen}
          type="button"
        >
          {day}
        </CalendarDayStyles.OpenButton>
      ) : (
        day
      )}
      {children}
    </CalendarDayStyles.Root>
  )
}

export function CalendarDayNumber({
  children,
  ...props
}: CalendarDayNumberProps) {
  return (
    <Styled.CalendarDayNumberRoot {...props}>
      {children}
    </Styled.CalendarDayNumberRoot>
  )
}

export function CalendarEvent({
  tone = 'neutral',
  type = 'button',
  ...props
}: CalendarEventProps) {
  return (
    <Styled.CalendarEventRoot
      {...props}
      type={type}
      data-tone={tone}
      data-ui-calendar-event="true"
    />
  )
}

export function TimelineEvent({
  tone = 'neutral',
  type = 'button',
  ...props
}: TimelineEventProps) {
  return <Styled.TimelineEventRoot {...props} type={type} data-tone={tone} />
}

export function CalendarTimeSlot({
  tone = 'neutral',
  selected = false,
  type = 'button',
  ...props
}: CalendarTimeSlotProps) {
  return (
    <Styled.CalendarTimeSlotRoot
      {...props}
      type={type}
      data-tone={tone}
      data-selected={selected}
    />
  )
}
