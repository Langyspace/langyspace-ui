import type { ComponentPropsWithRef } from 'react'

export interface MeetingParticipant {
  name: string
  imageUrl?: string
  imageAlt?: string
}
export interface MeetingFrameProps extends Omit<
  ComponentPropsWithRef<'figure'>,
  'children'
> {
  main: MeetingParticipant
  inset: MeetingParticipant
  /** Equal video tiles for a shared conversation; spotlight preserves the original inset frame. */
  layout?: 'spotlight' | 'side-by-side'
  onParticipantImageError?: (
    position: 'main' | 'inset',
    imageUrl: string,
  ) => void
}
