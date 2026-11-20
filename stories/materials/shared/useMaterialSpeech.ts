import { useRecordedAudio } from '../../../src/internal/useRecordedAudio'
import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'

const EMPTY_RECORDINGS: readonly PreparedRecording[] = []

/** Compatibility adapter: callers must supply prepared recordings; never synthesize browser speech. */
export function useMaterialSpeech(
  clips: readonly PreparedRecording[] = EMPTY_RECORDINGS,
) {
  const audio = useRecordedAudio(clips)
  return {
    ...audio,
    playing: Boolean(audio.playingId),
    speak: (text: string, _legacyRate?: number) => {
      const clip = clips.find((item) => item.text === text)
      audio.speak([{ id: clip?.id ?? 'unavailable', text }])
    },
  }
}
