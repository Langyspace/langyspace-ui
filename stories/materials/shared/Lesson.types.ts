import type { Ref } from 'react'
import type {
  SlideDeckPage,
  SlideDeckProps,
} from '../../../src/components/Slide/SlideDeck.types'
import type { useLessonSpeech } from './useLessonSpeech'
export interface HomeworkDestinationProps {
  studentPortalOrigin?: string
}
export interface LessonProps extends HomeworkDestinationProps {
  initialPageId?: string
}
export interface NotesProps {
  storageKey: string
  open: boolean
  onClose: () => void
}
export type LessonSpeech = ReturnType<typeof useLessonSpeech>
export interface SpeechProps {
  speech: LessonSpeech
}
export interface LessonShellProps extends LessonProps {
  navigationMode?: SlideDeckProps['navigationMode']
  materialKey: string
  pageIds: readonly string[]
  label: string
  pages: (
    speech: LessonSpeech,
    activePageId: string,
  ) => readonly SlideDeckPage[]
}
export interface LessonIntroProps {
  level: string
  lesson: string
  before: string
  accent: string
  goal: string
  compact?: boolean
}
export interface PronunciationPair {
  c: string[][]
  tip: string
}
export interface CorrectionItem {
  id: string
  s: string
  a?: string
  why: string
  ok?: boolean
}

export interface NotesTriggerProps {
  open: boolean
  onClick: () => void
  ref?: Ref<HTMLButtonElement>
}
