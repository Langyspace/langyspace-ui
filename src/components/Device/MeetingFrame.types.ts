import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface MeetingParticipant {
  id?: string
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
  layout?: 'spotlight' | 'side-by-side' | 'grid'
  /** Pastel video-stage backdrop for illustrated participants; the default stays dark. */
  stageTone?: 'dark' | 'sky'
  /** Opt-in crop for full-width video; existing illustrated scenes retain contain. */
  imageFit?: 'contain' | 'cover'
  /** A real roster, including the learner; stable IDs identify the active speaker. */
  participants?: readonly (MeetingParticipant & { id: string })[]
  activeParticipantId?: string
  /** Literal current caption; consumers own recording timing. */
  caption?: ReactNode
  /** Separate live learner prompt; shown alongside the recorded speaker caption. */
  learnerCaption?: ReactNode
  /** Native shared-screen evidence, not another meeting frame. */
  sharedContent?: ReactNode
  /** Identifies the presenter and the application shown in the shared window. */
  sharedContentLabel?: string
  /** Spotlight inset may show the full scene instead of the default avatar. */
  insetPresentation?: 'avatar' | 'video'
  onParticipantImageError?: (
    position: 'main' | 'inset',
    imageUrl: string,
  ) => void
}
