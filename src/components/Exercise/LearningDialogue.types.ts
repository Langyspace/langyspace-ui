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
  /** Marks the real learner rather than an authored fictional speaker. */
  participant?: 'learner'
  avatarUrl?: string
  initials?: string
  side: 'start' | 'end'
  content: ReactNode
  /** Challenge cues and optional short language supports for oral role-play. */
  cue?: ReactNode
  hint?: ReactNode
  /** Accessible context for this line’s support controls. */
  guidanceLabel?: string
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
  /** Centered action at the end of a stretched conversation column, outside its bubbles. */
  footerAction?: ReactNode
  /** Optional product-resolved identity; a usable first name and photo are both required. */
  learnerIdentity?: { firstName: string; avatarUrl: string }
  /** Controlled challenge: cues first, bulb for tips, eye for the model dialogue. */
  guidance?: {
    placement?: 'below' | 'line'
    activeLineId?: string
    level: 'cue' | 'hint' | 'full'
    onChange: (level: 'cue' | 'hint' | 'full', lineId?: string) => void
  }
  /** Optional ordered support; standard guidance remains unchanged. */
  sequentialGuidance?: {
    hintedLineIds: readonly string[]
    revealedLineIds: readonly string[]
    /** Undefined resets the respective support layer after the last item. */
    onRevealHint: (lineId?: string) => void
    /** Omit for a single sequential hint control without a model action. */
    onRevealModel?: (lineId?: string) => void
  }
  /** Paired introduces a visual gap before each new question/answer exchange. */
  presentation?: 'dialogue' | 'paired'
  /** Fill gives open conversation prompts generous bubble width without changing their skin. */
  bubbleWidth?: 'content' | 'fill'
  density?: 'regular' | 'compact'
  /** Identification is independent of bubble density. Names remain visible by default. */
  speakerLabels?: 'visible' | 'hidden'
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
