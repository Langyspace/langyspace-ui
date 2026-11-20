import { useRecordedAudio } from '../../../src/internal/useRecordedAudio'
import { prepareMaterialRecordings } from '../shared/prepareMaterialRecordings'
import provenance from './audio-provenance.json'

const assets = import.meta.glob('./assets/audio/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const clips = prepareMaterialRecordings(provenance.items, assets)

/** Exact ID/text binding through the same prepared player as the other reviewed lessons. */
export function useLessonSpeech() {
  return useRecordedAudio(clips)
}
