import type { ReactNode } from 'react'
import type { QuestionListProps } from '../../../src/components/Exercise/QuestionList.types'
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
  imageBadge?: { src: string; alt: string }
  explanation?: string
  presentation?: 'default' | 'warmup'
  counter?: string
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
export type PromptExerciseProps = Pick<
  QuestionListProps,
  'items' | 'numbered' | 'answerMinLines' | 'density'
>

export interface GapExerciseProps {
  items: readonly {
    id: string
    before: string
    after?: string
    answer: string
  }[]
  choices: readonly string[]
}
