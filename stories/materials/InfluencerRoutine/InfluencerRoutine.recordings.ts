import manifest from './audio-provenance.json'
import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'

const files = import.meta.glob('./assets/audio/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

export const routineRecordings: readonly PreparedRecording[] =
  manifest.items.map((item) => {
    const src = files['./' + item.file]
    if (!src) throw new Error(`Missing prepared routine recording: ${item.id}`)
    return { id: item.id, text: item.text, src }
  })
