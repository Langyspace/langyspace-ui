import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'

/** Normalize provenance locations at the product boundary; matching still requires exact ID/text. */
export function prepareMaterialRecordings(
  clips: readonly { id: string; text: string; file: string }[],
  assets: Readonly<Record<string, string>>,
): readonly PreparedRecording[] {
  return clips.flatMap((clip) => {
    const file = clip.file
      .replaceAll('\\', '/')
      .match(/(?:^|\/)(assets\/audio\/[^/]+\.mp3)$/)?.[1]
    const src = file ? assets[`./${file}`] : undefined
    return src ? [{ id: clip.id, text: clip.text, src }] : []
  })
}
