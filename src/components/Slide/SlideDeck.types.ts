import type { ComponentPropsWithRef, ReactNode, RefObject } from 'react'

export interface SlideGestureOptions {
  viewportRef: RefObject<HTMLDivElement | null>
  activeIdRef: RefObject<string | undefined>
  movementTargetRef: RefObject<number | undefined>
  idsKey: string
  navigationMode: 'pages' | 'continuous'
  onStep: (direction: 1 | -1) => void
}

export interface SlideTouchGesture {
  id: number
  x: number
  y: number
  lastY: number
  axis?: 'vertical' | 'horizontal'
  direction?: 1 | -1
  consumedContent: boolean
  native: boolean
  moving: boolean
}

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
  /** Page gestures by default; continuous mode keeps native document scrolling without page controls. */
  navigationMode?: 'pages' | 'continuous'
  /** Product-owned actions such as fullscreen, without duplicating the slide layout. */
  actions?: ReactNode
  /** Nonmodal material overlays, such as controlled notes, within the deck's viewport. */
  overlay?: ReactNode
}
