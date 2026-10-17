import type { ComponentPropsWithRef } from 'react'

export interface CalendarEventProps extends ComponentPropsWithRef<'button'> {
  tone?: 'neutral' | 'success' | 'muted'
}
