import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'
import provenance from './expression-audio-provenance.json'
const assets = import.meta.glob('./assets/expressions/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
export const expressionRecordings: readonly PreparedRecording[] =
  provenance.items.flatMap((clip) => {
    const src = assets['./' + clip.file]
    return src ? [{ id: clip.id, text: clip.text, src }] : []
  })
