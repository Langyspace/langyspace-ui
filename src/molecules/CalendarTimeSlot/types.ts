import type { ComponentPropsWithRef } from 'react'
export interface CalendarTimeSlotProps extends ComponentPropsWithRef<'button'> {
  tone?: 'neutral' | 'muted'
  selected?: boolean
}
