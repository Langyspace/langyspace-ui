import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'
import type { ReviewedClipRecord } from '../shared/ReviewedLesson.types'
import provenance from './vocabulary-audio-provenance.json'
const assets = import.meta.glob('./assets/vocabulary/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
export const vocabularyRecordings: readonly PreparedRecording[] = (
  provenance.items as readonly ReviewedClipRecord[]
).flatMap((clip) => {
  const src = assets['./' + clip.file]
  return src ? [{ id: clip.id, text: clip.text, src }] : []
})
