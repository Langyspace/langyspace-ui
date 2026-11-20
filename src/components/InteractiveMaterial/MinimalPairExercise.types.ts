import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { FeedbackSoundOutcome } from '../Quiz/useFeedbackSounds.types'
export interface MinimalPairChoice {
  id: string
  word: ReactNode
  phonetic?: string
  imageUrl?: string
  imageAlt?: string
  feedbackOutcome?: FeedbackSoundOutcome
}
export interface MinimalPairExerciseProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'onSelect'
> {
  mode: 'listen' | 'speak'
  onModeChange?: (mode: 'listen' | 'speak') => void
  choices: readonly MinimalPairChoice[]
  onSelect: (id: string) => void
  onListen?: () => void
  onNext?: () => void
  selectedId?: string
  feedback?: 'correct' | 'incorrect'
  hint?: ReactNode
  score?: readonly { id: string; result: 'correct' | 'incorrect' }[]
  disabled?: boolean
  labels?: Partial<{
    listenMode: string
    speakMode: string
    listen: string
    next: string
    score: string
  }>
}
