import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { FeedbackSoundOutcome } from '../Quiz/useFeedbackSounds.types'

export interface VoiceMessageChoice {
  id: string
  label: string
  feedback?: 'correct' | 'incorrect'
  feedbackOutcome?: FeedbackSoundOutcome
}

export interface VoiceMessageQuestion {
  id: string
  prompt: string
  choices: readonly VoiceMessageChoice[]
  value?: string
  disabled?: boolean
  /** Consumer-owned corrective feedback after an answer. */
  feedback?: ReactNode
}

export interface VoiceMessageAudio {
  /** Stable content identity. Changing this or src starts a fresh exercise. */
  id: string
  /** Omit until the recording is ready; playback then remains unavailable. */
  src?: string
  transcript: string
  /** Seconds, used before the browser reads the file metadata. */
  duration?: number
  timestamp: string
}

export interface VoiceMessageLabels {
  play: string
  pause: string
  loading: string
  replay: string
  speed: string
  transcript: string
  showTranscript?: string
  hideTranscript?: string
  transcriptHidden: string
  audioUnavailable: string
  audioError: string
  retry: string
  correct: string
  incorrect: string
  questions: string
  conversation: string
}

export interface VoiceMessageExerciseProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'children' | 'onSelect'
> {
  contact: { name: string; avatarUrl?: string; status?: string }
  greeting?: { text: string; timestamp: string }
  /** A real image shared in the conversation, before its voice message. */
  attachment?: { src: string; alt: string; timestamp?: string }
  audio: VoiceMessageAudio
  /** Additional recordings in the same chat; each retains its own playback/transcript history. */
  additionalAudios?: readonly VoiceMessageAudio[]
  /** Pause when leaving a slide, without losing its transcript/listening history. */
  active?: boolean
  /** Equal tracks centre a phone beside comprehension; fluid preserves legacy layouts. */
  layout?: 'fluid' | 'balanced'
  /** Override vertical alignment without changing the layout's track widths. */
  columnAlignment?: 'start' | 'center' | 'stretch'
  questions: readonly VoiceMessageQuestion[]
  /** Optional visible heading above the questions; the accessible group name remains in labels. */
  questionHeading?: ReactNode
  onAnswer: (questionId: string, choiceId: string) => void
  /** Optional instructions or a spoken-response prompt, owned by the lesson. */
  footer?: ReactNode
  /** Optional product-owned action; this component never requests microphone access. */
  replyAction?: { label: string; onClick: () => void; disabled?: boolean }
  labels?: Partial<VoiceMessageLabels>
  /** Optional follow-up replay control after a completed first pass; disappears on the second. */
  replayActionLabel?: string
  /** Defaults to automatic third-listen reveal. Earlier/manual modes are explicit variations. */
  transcriptReveal?: 'second-listen' | 'third-listen' | 'manual-after-replay'
  /** Allow Show/Hide before playback; defaults to true for third-listen. Automatic reveal still applies. */
  transcriptToggle?: boolean
}
