export interface B101LessonProps {
  studentPortalOrigin?: string
  initialPageId?: string
}
export interface SpeechLine {
  id: string
  text: string
  speaker?: string
}
export interface LessonSpeech {
  speak: (lines: readonly SpeechLine[]) => void
  stop: () => void
  playingId?: string
  paused: boolean
  togglePause: () => void
  error: string
}
export interface SpeechSectionProps {
  speech: LessonSpeech
}
export interface NotesProps {
  open: boolean
  onClose: () => void
}

export interface VocabularySectionProps {
  group?: number
  active?: boolean
}

export interface YourVersionSectionProps {
  swapped: boolean
  support: boolean
}
