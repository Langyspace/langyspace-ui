import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface MapPlace {
  id: string
  label: string
  symbol?: ReactNode
  xPercent: number
  yPercent: number
  /** Clickable footprint of a landmark in an illustrated map. */
  area?: { widthPercent: number; heightPercent: number }
}
export interface RouteMapProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'onSelect'
> {
  label: string
  /** Finished map artwork. Labels and clickable landmarks remain native. */
  image?: { src: string; alt: string; aspectRatio?: number }
  places: readonly MapPlace[]
  streets: readonly {
    id: string
    label?: string
    from: { x: number; y: number }
    to: { x: number; y: number }
  }[]
  startId?: string
  startLabel?: string
  selectedId?: string
  /** Omit for a fully labeled reference map; supply IDs for progressive vocabulary. */
  revealedIds?: readonly string[]
  onSelect?: (id: string) => void
  footer?: ReactNode
}
