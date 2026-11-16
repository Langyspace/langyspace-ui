import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface VoiceMessageChoice {
  id: string
  label: string
  feedback?: 'correct' | 'incorrect'
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
  audio: VoiceMessageAudio
  /** Pause when leaving a slide, without losing its transcript/listening history. */
  active?: boolean
  questions: readonly VoiceMessageQuestion[]
  onAnswer: (questionId: string, choiceId: string) => void
  /** Optional instructions or a spoken-response prompt, owned by the lesson. */
  footer?: ReactNode
  /** Optional product-owned action; this component never requests microphone access. */
  replyAction?: { label: string; onClick: () => void; disabled?: boolean }
  labels?: Partial<VoiceMessageLabels>
}
