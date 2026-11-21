import { useRecordedAudio } from '../../../src/internal/useRecordedAudio'
import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'

const EMPTY_RECORDINGS: readonly PreparedRecording[] = []

/** Legacy shell adapter; no browser-voice fallback when a recording is absent. */
export function useLessonSpeech(
  clips: readonly PreparedRecording[] = EMPTY_RECORDINGS,
) {
  return useRecordedAudio(clips)
}
