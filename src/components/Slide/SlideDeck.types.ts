import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface SlideDeckPage {
  /** Stable lesson page identity; never use a position as the id. */
  id: string
  label: string
  content: ReactNode
}

export interface SlideDeckProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'onChange'
> {
  pages: readonly SlideDeckPage[]
  /** Requests a page. The onPageChange callback also reports pages reached by scrolling. */
  pageId?: string
  onPageChange?: (pageId: string) => void
  label: string
  previousPageLabel?: string
  /** Product-owned actions such as fullscreen, without duplicating the slide layout. */
  actions?: ReactNode
}
