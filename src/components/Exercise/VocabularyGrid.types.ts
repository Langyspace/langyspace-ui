import type { ComponentPropsWithRef } from 'react'
export interface VocabularyItem {
  id: string
  imageUrl: string
  imageAlt: string
  word: string
  translation: string
  initialHint?: string
}
export interface VocabularyGridProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'onChange' | 'onPlay'
> {
  items: readonly VocabularyItem[]
  revealedIds: readonly string[]
  onReveal: (id: string) => void
  onPlay?: (id: string) => void
  showAll?: boolean
  showInitial?: boolean
  /** Disable for teacher-led guessing: pointing/focusing alone will not reveal the answer. */
  revealOnHover?: boolean
  /** Contextual scenes fill the card; isolated illustrations retain their existing framing. */
  imageVariant?: 'isolated' | 'scene'
  /** Omit for responsive three/two-column layout. */
  columns?: 2 | 3 | 4
  density?: 'compact' | 'regular'
  revealVariant?: 'overlay' | 'tooltip'
  revealLabel?: string
}
