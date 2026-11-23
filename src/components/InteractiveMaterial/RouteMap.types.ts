import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface MapPlace {
  id: string
  label: string
  symbol?: ReactNode
  xPercent: number
  yPercent: number
}
export interface RouteMapProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'onSelect'
> {
  label: string
  places: readonly MapPlace[]
  streets: readonly {
    id: string
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
