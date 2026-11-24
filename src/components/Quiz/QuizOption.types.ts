import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { FeedbackSoundOutcome } from './useFeedbackSounds.types'

export type QuizOptionState = 'default' | 'correct' | 'wrong' | 'dim'

export type QuizOptionProps = ComponentPropsWithRef<'button'> & {
  letter: ReactNode
  state?: QuizOptionState
  /** Known outcome of activating this answer; omitted for preferences/ungraded choices. */
  feedbackOutcome?: FeedbackSoundOutcome
  /** Compact choices for a slide panel; existing practice density is the default. */
  density?: 'regular' | 'compact'
  /** Intrinsic-width answers beside a prompt; reserves space for the result mark. */
  layout?: 'block' | 'inline'
}
