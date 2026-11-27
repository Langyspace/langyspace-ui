import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { QuizSessionHeaderProps } from './QuizSessionHeader.types'
import type { QuizOptionState } from './QuizOption.types'
import type { FeedbackSoundOutcome } from './useFeedbackSounds.types'

export interface QuizSessionQuestion {
  level: string
  counter: string
  detail: ReactNode
  prompt: ReactNode
  context?: ReactNode
  narrationAction?: ReactNode
  options: readonly {
    id: string
    label: ReactNode
    state?: QuizOptionState
    disabled?: boolean
    feedbackOutcome?: FeedbackSoundOutcome
  }[]
  onSelect: (id: string) => void
  feedback?: { tone: 'correct' | 'wrong'; content: ReactNode }
  nextAction?: { label: string; onClick: () => void; disabled?: boolean }
  hint?: ReactNode
}

/** Controlled Student presentation; scoring, audio, keyboard and persistence stay with the consumer. */
export interface QuizSessionProps extends ComponentPropsWithRef<'section'> {
  header: QuizSessionHeaderProps
  question?: QuizSessionQuestion
}
