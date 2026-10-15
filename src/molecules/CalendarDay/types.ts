import type { ComponentPropsWithRef, ReactNode } from 'react'

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
