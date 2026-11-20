import type { ReactNode } from 'react'
import type { LessonProps } from '../shared/Lesson.types'
import type { useLessonSpeech } from './useLessonSpeech'

export type A201LessonProps = LessonProps
export interface SpeechLine {
  id: string
  text: string
  speaker?: string
}
export interface GapPart {
  id: string
  answer: string
}
export interface DialogueLine extends SpeechLine {
  speaker: string
  translation: string
  parts?: readonly (string | GapPart)[]
}
export interface SpeechProps {
  speech: ReturnType<typeof useLessonSpeech>
}
export interface DialogueProps extends SpeechProps {
  lines: readonly DialogueLine[]
  gaps?: readonly string[]
  onGapToggle?: (id: string) => void
  emphasis?: boolean
}
export interface DialoguePageProps extends DialogueProps {
  active: boolean
  title: string
  context: string
  children?: ReactNode
}
export interface WarmupProps {
  index: number
}
export interface GapButtonStyleProps {
  $revealed: boolean
}
