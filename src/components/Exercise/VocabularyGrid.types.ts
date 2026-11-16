import type { ComponentPropsWithRef } from 'react'
export interface VocabularyItem {
  id: string
  imageUrl: string
  imageAlt: string
  word: string
  translation: string
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
  /** Contextual scenes fill the card; isolated illustrations retain their existing framing. */
  imageVariant?: 'isolated' | 'scene'
  revealLabel?: string
}
