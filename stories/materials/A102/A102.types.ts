import type { RecordedAudioLine } from '../../../src/internal/useRecordedAudio.types'
import type { useRecordedAudio } from '../../../src/internal/useRecordedAudio'
export interface A102LessonProps {
  initialPageId?: string
  learnerName?: string
  studentPortalOrigin?: string
}
export type A102Speech = ReturnType<typeof useRecordedAudio>
export interface SymbolItem extends RecordedAudioLine {
  symbol: string
  word: string
}
