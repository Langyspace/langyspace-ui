export type FeedbackSoundOutcome = 'correct' | 'wrong'

export interface FeedbackSoundsController {
  enabled: boolean
  setEnabled: (enabled: boolean) => void
  /** Call in the trusted answer click, never from a render/effect or hover. */
  play: (outcome: FeedbackSoundOutcome) => void
  stop: () => void
}
