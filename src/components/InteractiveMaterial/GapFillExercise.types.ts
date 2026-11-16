import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { QuizOptionState } from '../Quiz/QuizOption.types'
export interface GapFillItem {
  id: string
  before: ReactNode
  after?: ReactNode
  answer?: ReactNode
  speaker?: string
}
export interface GapFillChoice {
  id: string
  label: ReactNode
  state?: QuizOptionState
  disabled?: boolean
}
export interface GapFillExerciseProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'onSelect'
> {
  items: readonly GapFillItem[]
  activeId?: string
  choices: readonly GapFillChoice[]
  onSelect: (gapId: string, choiceId: string) => void
  optionsVisible?: boolean
  onOptionsToggle?: () => void
  status?: ReactNode
  disabled?: boolean
  labels?: Partial<{ show: string; hide: string; gap: string; empty: string }>
}
