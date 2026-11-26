import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'
import source from './DevInterviews131.content.json'

const urls = import.meta.glob<string>('./assets/audio/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
})
const requested = [
  ...source.homeworkVocabulary.flatMap((item) => [
    { id: item.audioId, text: item.word },
    { id: item.backAudioId, text: item.example },
  ]),
  ...source.dialogue,
  ...source.hiringCall,
  ...source.technicalCall,
  ...source.notes,
  ...source.shadowing,
]

/** Missing prepared files stay unavailable; this never substitutes browser speech or a fake clip. */
export const interviewRecordings: readonly PreparedRecording[] =
  requested.flatMap((item) => {
    const src = urls[`./assets/audio/${item.id}.mp3`]
    return src ? [{ id: item.id, text: item.text, src }] : []
  })
