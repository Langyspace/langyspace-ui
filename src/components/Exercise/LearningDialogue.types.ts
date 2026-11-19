import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface LearningDialogueLine {
  id: string
  speaker: string
  avatarUrl?: string
  side: 'start' | 'end'
  content: ReactNode
  translation?: ReactNode
  audioLabel?: string
  /** Makes this line a controlled learner-response action. */
  actionLabel?: string
}
export interface LearningDialogueProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'onPlay'
> {
  lines: readonly LearningDialogueLine[]
  density?: 'regular' | 'compact'
  translatedIds?: readonly string[]
  playingId?: string
  onTranslate?: (id: string) => void
  onPlay?: (id: string) => void
  completedIds?: readonly string[]
  onComplete?: (id: string) => void
}

/** Internal text action; rich content may contain its own independent controls. */
export interface LearningDialogueActionProps {
  content: ReactNode
  completed?: boolean
  label?: string
  expanded?: boolean
  pressed?: boolean
  onActivate: () => void
}
