import type { ReactNode } from 'react'
import type { VocabularyItem } from '../../../src/components/Exercise/VocabularyGrid.types'

export interface VocabularyExerciseProps {
  items: readonly VocabularyItem[]
  note?: ReactNode
}
export interface ChoiceExerciseProps {
  question: string
  options: readonly string[]
  correctIndex: number
  image?: { src: string; alt: string }
  explanation?: string
}
export interface DialogueExerciseProps {
  lines: readonly {
    id: string
    speaker: string
    text: string
    translation?: string
    avatarUrl?: string
  }[]
}
export interface PromptExerciseProps {
  items: readonly {
    id: string
    prompt: string
    answer?: string
    hint?: string
  }[]
  numbered?: boolean
  answerMinLines?: number
}
export interface GapExerciseProps {
  items: readonly {
    id: string
    before: string
    after?: string
    answer: string
  }[]
  choices: readonly string[]
}
