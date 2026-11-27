import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface QuestionListItem {
  id: string
  prompt: string
  answer?: ReactNode
  cue?: ReactNode
  hint?: ReactNode
}

export interface QuestionListProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  /** Authoring requirement: each question block contains at least three meaningful questions. */
  items: readonly QuestionListItem[]
  numbered?: boolean
  /** Compact vertical rhythm for longer lists; preserves prompt and answer type sizes. */
  density?: 'regular' | 'compact'
  answerMinLines?: number
  labels?: Partial<{ hint: string; hideHints: string }>
}
