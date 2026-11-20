import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface DialogueGapStyleProps {
  $revealed: boolean
}
export interface LearningDialogueGap {
  id: string
  answer: string
}
export interface LearningDialogueLine {
  id: string
  speaker: string
  avatarUrl?: string
  side: 'start' | 'end'
  content: ReactNode
  /** Challenge cues and optional short language supports for oral role-play. */
  cue?: ReactNode
  hint?: ReactNode
  /** Inline answers retain their width before and after a click. */
  parts?: readonly (string | LearningDialogueGap)[]
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
  /** Controlled challenge: cues first, bulb for tips, eye for the model dialogue. */
  guidance?: {
    level: 'cue' | 'hint' | 'full'
    onChange: (level: 'cue' | 'hint' | 'full') => void
  }
  density?: 'regular' | 'compact'
  translatedIds?: readonly string[]
  playingId?: string
  onTranslate?: (id: string) => void
  onPlay?: (id: string) => void
  revealedGapIds?: readonly string[]
  onRevealGap?: (gapId: string, lineId: string) => void
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
