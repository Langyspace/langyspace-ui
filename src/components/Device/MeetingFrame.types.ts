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
  onParticipantImageError?: (
    position: 'main' | 'inset',
    imageUrl: string,
  ) => void
}
