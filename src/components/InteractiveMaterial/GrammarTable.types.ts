import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface GrammarTableRow {
  id: string
  subject: ReactNode
  verb?: ReactNode
  example: ReactNode
  translation?: ReactNode
  audioLabel?: string
}
export interface GrammarTableProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'title' | 'onPlay'
> {
  title: ReactNode
  /** Keep a table name accessible without repeating the page title visually. */
  captionVisibility?: 'visible' | 'screen-reader'
  /** Group each pattern with its example; use plain purpose labels rather than pronoun chips. */
  layout?: 'columns' | 'patterns'
  rows: readonly GrammarTableRow[]
  columns?: { subject: string; verb?: string; example: string }
  tone?: 'affirmative' | 'negative' | 'question'
  hiddenAnswers?: boolean
  revealedIds?: readonly string[]
  onReveal?: (id: string) => void
  onPlay?: (id: string) => void
  revealLabel?: string
  explanation?: ReactNode
  emptyMessage?: ReactNode
}
