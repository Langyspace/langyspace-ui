import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'
import provenance from './TrialB1.audio-provenance70.json'
const assets = import.meta.glob('./assets/review70/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const recordings: readonly PreparedRecording[] = provenance.items.map(
  (item) => {
    const src = assets['./' + item.file]
    if (!src) throw new Error(`Missing prepared TrialB1 audio: ${item.id}`)
    return { id: item.id, text: item.text, src }
  },
)
export default recordings
