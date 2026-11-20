import { useRecordedAudio } from '../../../src/internal/useRecordedAudio'
import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'
import provenance from './audio-provenance.json'
const assets = import.meta.glob('./assets/audio/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const clips: readonly PreparedRecording[] = provenance.items.flatMap((clip) => {
  const src = assets['./' + clip.file]
  return src ? [{ id: clip.id, text: clip.text, src }] : []
})
export function useLessonSpeech() {
  return useRecordedAudio(clips)
}
