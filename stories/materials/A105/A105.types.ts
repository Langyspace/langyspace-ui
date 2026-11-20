export interface A105LessonProps {
  initialPageId?: string
  learnerName?: string
  studentPortalOrigin?: string
}
export interface ProduceItem {
  id: string
  word: string
  translation: string
  price: number
}
export interface SpeechLine {
  id: string
  text: string
}
export interface A105Speech {
  speak: (lines: readonly SpeechLine[]) => void
  stop: () => void
  playingId?: string
  paused: boolean
  error: string
  togglePause: () => void
  has: (line: SpeechLine) => boolean
}
