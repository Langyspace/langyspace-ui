import type { ComponentPropsWithRef } from 'react'

export interface TimelineEventProps extends ComponentPropsWithRef<'button'> {
  tone?: 'neutral' | 'success' | 'muted'
}
