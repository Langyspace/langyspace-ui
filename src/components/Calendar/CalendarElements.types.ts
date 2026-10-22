import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface CalendarMonthGridProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

export interface CalendarWeekGridProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

export type DayAction =
  | { onOpen: () => void; openLabel: string }
  | { onOpen?: never; openLabel?: never }

export type CalendarDayProps = Omit<
  ComponentPropsWithRef<'div'>,
  'onClick' | 'onKeyDown' | 'role' | 'tabIndex'
> & {
  day: ReactNode
  muted?: boolean
} & DayAction

export interface CalendarDayNumberProps extends ComponentPropsWithRef<'span'> {
  children: ReactNode
}

export interface CalendarEventProps extends ComponentPropsWithRef<'button'> {
  tone?: 'neutral' | 'success' | 'muted'
}

export interface TimelineEventProps extends ComponentPropsWithRef<'button'> {
  tone?: 'neutral' | 'success' | 'muted'
}

export interface CalendarTimeSlotProps extends ComponentPropsWithRef<'button'> {
  tone?: 'neutral' | 'muted'
  selected?: boolean
}
