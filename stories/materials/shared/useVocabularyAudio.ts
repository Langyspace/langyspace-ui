import { useEffect } from 'react'
import { useRecordedAudio } from '../../../src/internal/useRecordedAudio'
import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'

export function useVocabularyAudio(
  recordings: readonly PreparedRecording[],
  active: boolean,
) {
  const audio = useRecordedAudio(recordings)
  useEffect(() => {
    if (!active) audio.stop()
  }, [active, audio.stop])
  return audio
}
