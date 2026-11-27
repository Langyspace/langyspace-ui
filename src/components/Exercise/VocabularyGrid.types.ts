import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { VocabularyControlsProps } from './VocabularyControls.types'
import type { PictureRegion } from '../../internal/PictureImage.types'
export interface VocabularyItem {
  id: string
  imageUrl?: string
  /** One independent illustration in an unchanged atlas; the whole card stays clickable. */
  imageRegion?: PictureRegion
  /** Noninteractive native visual for concepts represented by an app or diagram. */
  visual?: ReactNode
  /** Native letters/numerals, with the same reveal and playback contract as images. */
  symbol?: ReactNode
  imageAlt: string
  word: string
  translation: string
  /** Short contextual usage shown only with a revealed word. */
  example?: string
  initialHint?: string
  /** Optional source-level or review badge, supplied by the lesson. */
  badge?: string
  /** Logical horizontal position of the image badge; existing badges keep the start edge. */
  badgePosition?: 'start' | 'end'
}
export interface VocabularyGridProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'onChange' | 'onPlay'
> {
  /** Shared bulb/eye controls, rendered below the grid. */
  controls?: VocabularyControlsProps
  /** Plain surfaces preserve transparent object illustrations on the lesson canvas. */
  surface?: 'card' | 'plain'
  /** Listen keeps the visible symbol unchanged and plays audio without revealing a label. */
  interaction?: 'reveal' | 'static' | 'listen'
  /** Compact, complete symbol chart; ordinary vocabulary keeps the cards layout. */
  layout?: 'cards' | 'reference'
  items: readonly VocabularyItem[]
  revealedIds: readonly string[]
  onReveal?: (id: string) => void
  onPlay?: (id: string) => void
  showAll?: boolean
  showInitial?: boolean
  /** Defaults to click-driven reveal. Opt into hover only for a deliberate preview variation. */
  revealOnHover?: boolean
  /** Contextual scenes fill the card; isolated illustrations retain their existing framing. */
  imageVariant?: 'isolated' | 'scene'
  /** Preserve a whole contextual scene when every part of the image is a useful cue. */
  imageFit?: 'cover' | 'contain'
  /** Whole-scene card ratio; defaults to 3:2 for regular contextual vocabulary. */
  imageAspectRatio?: number
  /** Omit for responsive three/two-column layout. */
  columns?: 2 | 3 | 4
  density?: 'compact' | 'regular'
  revealVariant?: 'overlay' | 'tooltip'
  revealLabel?: string
  /** Accessible playback action prefix for listen-only cards. */
  playLabel?: string
  /** Keep only this revealed card's tooltip open; other labels stay hidden until showAll. */
  activeId?: string
  /** Optional completed marker, without adding a question mark before a first reveal. */
  markRevealed?: boolean
}
