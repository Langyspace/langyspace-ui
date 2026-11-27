import type { FeedbackSoundOutcome } from '../components/Quiz/useFeedbackSounds.types'

export type FeedbackSoundKind =
  FeedbackSoundOutcome | 'hint' | 'question' | 'roulette'

export interface RouletteFeedbackSequence {
  ticks: readonly number[]
  duration: number
  requestedAt: number
}
