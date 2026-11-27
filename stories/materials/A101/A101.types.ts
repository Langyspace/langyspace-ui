import type { VocabularyItem } from '../../../src/components/Exercise/VocabularyGrid.types'
export interface A101LessonProps {
  studentPortalOrigin?: string
  initialPageId?: string
  learnerName?: string
}
export interface WarmUpData {
  t: string
  im: string
  id: string
  o: readonly string[]
  a: number
  why: Readonly<Partial<Record<string, string>>>
}
export interface SpeechLine {
  id: string
  text: string
  speaker?: string
}
export type VocabularyData = VocabularyItem & { sourceImage: string }
