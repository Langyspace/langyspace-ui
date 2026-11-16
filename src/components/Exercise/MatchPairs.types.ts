import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface MatchPairItem {
  id: string
  label: ReactNode
  marker: ReactNode
}
export interface MatchPairsProps extends ComponentPropsWithRef<'div'> {
  questions: readonly MatchPairItem[]
  answers: readonly MatchPairItem[]
  matches: Readonly<Record<string, string>>
  selectedQuestionId?: string
  incorrectAnswerId?: string
  onQuestionSelect: (id: string) => void
  onAnswerSelect: (id: string) => void
  questionLabel: string
  answerLabel: string
  status?: ReactNode
}
