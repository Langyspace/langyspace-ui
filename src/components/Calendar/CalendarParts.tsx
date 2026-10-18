import * as token from '../../foundations/tokenValues'
import type { ComponentPropsWithRef, ReactNode } from 'react'
import { styled } from 'styled-components'
import * as CalendarDayStyles from './CalendarDay.styles'
import { Pressable } from '../Pressable'

const CalendarMonthGridRoot = styled.div.withConfig({
  componentId: 'lsui-sc-calendar-month-grid',
})`
  display: grid;
  grid-template-columns: repeat(7, minmax(7.5rem, 1fr));
  min-width: 52.5rem;
`

export interface CalendarMonthGridProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

/** @deprecated Prefer ScheduleCalendar; retained for existing consumers. */
export function CalendarMonthGrid({
  children,
  ...props
}: CalendarMonthGridProps) {
  return <CalendarMonthGridRoot {...props}>{children}</CalendarMonthGridRoot>
}

const CalendarWeekGridRoot = styled.div.withConfig({
  componentId: 'lsui-sc-calendar-week-grid',
})`
  display: grid;
  grid-template-columns: 4rem repeat(7, minmax(7rem, 1fr));
  min-width: 53rem;
  background: ${token.colorNeutral0};
`

export interface CalendarWeekGridProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

/** @deprecated Prefer ScheduleCalendar; retained for existing consumers. */
export function CalendarWeekGrid({
  children,
  ...props
}: CalendarWeekGridProps) {
  return <CalendarWeekGridRoot {...props}>{children}</CalendarWeekGridRoot>
}

type DayAction =
  | { onOpen: () => void; openLabel: string }
  | { onOpen?: never; openLabel?: never }

export type CalendarDayProps = Omit<
  ComponentPropsWithRef<'div'>,
  'onClick' | 'onKeyDown' | 'role' | 'tabIndex'
> & {
  day: ReactNode
  muted?: boolean
} & DayAction

/** @deprecated Prefer ScheduleCalendar; retained for existing consumers. */
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

const CalendarDayNumberRoot = styled.span.withConfig({
  componentId: 'lsui-sc-calendar-day-number',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  border-radius: ${token.radiusPill};
  color: inherit;
  background: transparent;
  font-size: 12px;
  font-weight: ${token.typographyFontWeightSemibold};
  &[aria-current='date'] {
    color: ${token.colorNeutral0};
    background: ${token.colorNeutral950};
  }
`

export interface CalendarDayNumberProps extends ComponentPropsWithRef<'span'> {
  children: ReactNode
}

/** @deprecated Prefer ScheduleCalendar; retained for existing consumers. */
export function CalendarDayNumber({
  children,
  ...props
}: CalendarDayNumberProps) {
  return <CalendarDayNumberRoot {...props}>{children}</CalendarDayNumberRoot>
}

const CalendarEventRoot = styled(Pressable).withConfig({
  componentId: 'lsui-sc-calendar-event',
})`
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 4px;
  padding: 3px 8px;
  border: 0;
  border-radius: 6px;
  font-size: 12px;
  font-weight: ${token.typographyFontWeightSemibold};
  text-align: left;
  color: ${token.colorNeutral0};
  background: ${token.colorNeutral950};
  &[data-tone='success'] {
    color: ${token.colorStatusSuccessForeground};
    background: ${token.colorStatusSuccessBackground};
  }
  &[data-tone='muted'] {
    color: ${token.colorContentMuted};
    background: ${token.colorNeutral100};
    text-decoration: line-through;
  }
`

export interface CalendarEventProps extends ComponentPropsWithRef<'button'> {
  tone?: 'neutral' | 'success' | 'muted'
}

/** @deprecated Prefer ScheduleCalendar; retained for existing consumers. */
export function CalendarEvent({
  tone = 'neutral',
  type = 'button',
  ...props
}: CalendarEventProps) {
  return (
    <CalendarEventRoot
      {...props}
      type={type}
      data-tone={tone}
      data-ui-calendar-event="true"
    />
  )
}

const TimelineEventRoot = styled(Pressable).withConfig({
  componentId: 'lsui-sc-timeline-event',
})`
  position: absolute;
  right: 4px;
  left: 4px;
  overflow: hidden;
  padding: 8px 12px;
  border: 0;
  border-left: 3px solid ${token.colorSurfaceBorderStrong};
  border-radius: 8px;
  font-size: 12px;
  text-align: left;
  color: ${token.colorContentDefault};
  background: ${token.colorNeutral100};
  &[data-tone='success'] {
    color: ${token.colorStatusSuccessForeground};
    background: ${token.colorStatusSuccessBackground};
    border-left-color: ${token.colorStatusSuccessIndicator};
  }
  &[data-tone='muted'] {
    color: ${token.colorContentMuted};
    background: ${token.colorNeutral100};
    border-left-color: ${token.colorNeutral500};
  }
`

export interface TimelineEventProps extends ComponentPropsWithRef<'button'> {
  tone?: 'neutral' | 'success' | 'muted'
}

/** @deprecated Prefer ScheduleCalendar; retained for existing consumers. */
export function TimelineEvent({
  tone = 'neutral',
  type = 'button',
  ...props
}: TimelineEventProps) {
  return <TimelineEventRoot {...props} type={type} data-tone={tone} />
}

const CalendarTimeSlotRoot = styled(Pressable).withConfig({
  componentId: 'lsui-sc-calendar-time-slot',
})`
  display: block;
  width: 100%;
  height: 56px;
  padding: 4px;
  border: 0;
  border-bottom: 1px solid ${token.colorSurfaceBorderSubtle};
  color: ${token.colorContentMuted};
  text-align: left;
  background: ${token.colorNeutral0};
  cursor: pointer;
  &[aria-disabled='true'] {
    cursor: default;
  }
  &[data-tone='muted'] {
    background: ${token.colorNeutral50};
  }
  &:not([aria-disabled='true']):hover {
    background: ${token.colorNeutral50};
  }
  &[data-selected='true'] {
    color: ${token.colorContentDefault};
    background: #e8fffe;
  }
  &:focus-visible {
    outline: 3px solid rgba(0, 242, 234, 0.72);
    outline-offset: -3px;
  }
`

export interface CalendarTimeSlotProps extends ComponentPropsWithRef<'button'> {
  tone?: 'neutral' | 'muted'
  selected?: boolean
}

/** @deprecated Prefer ScheduleCalendar; retained for existing consumers. */
export function CalendarTimeSlot({
  tone = 'neutral',
  selected = false,
  type = 'button',
  ...props
}: CalendarTimeSlotProps) {
  return (
    <CalendarTimeSlotRoot
      {...props}
      type={type}
      data-tone={tone}
      data-selected={selected}
    />
  )
}
