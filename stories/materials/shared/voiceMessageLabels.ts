import type { VoiceMessageLabels } from '../../../src/components/VoiceMessage/VoiceMessageExercise.types'

/** Shared English actions for the canonical per-recording transcript control. */
export const voiceMessageTranscriptLabels = {
  showTranscript: 'Show transcript',
  hideTranscript: 'Hide transcript',
} satisfies Pick<VoiceMessageLabels, 'showTranscript' | 'hideTranscript'>
