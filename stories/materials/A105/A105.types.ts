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

export interface PronunciationProps {
  choices: readonly [string, string]
  translations: readonly [string, string]
  tip: string
}
