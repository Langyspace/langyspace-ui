import type { useVoiceMessageAudio } from './useVoiceMessageAudio'
import type {
  VoiceMessageAudio,
  VoiceMessageExerciseProps,
  VoiceMessageLabels,
} from './VoiceMessageExercise.types'

export interface RecordingProps {
  audio: VoiceMessageAudio
  contact: VoiceMessageExerciseProps['contact']
  active: boolean
  media: ReturnType<typeof useVoiceMessageAudio>
  labels: VoiceMessageLabels
  transcriptReveal: NonNullable<VoiceMessageExerciseProps['transcriptReveal']>
  transcriptToggle: boolean
  followUpStarted: boolean
  id: string
  onPlaybackStart?: (element: HTMLAudioElement) => void
}

export interface TranscriptOverride {
  visible: boolean
  beforeAutomaticReveal: boolean
}
