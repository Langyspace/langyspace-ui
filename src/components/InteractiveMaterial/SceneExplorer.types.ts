import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface SceneHotspot {
  id: string
  /** Coordinates in the original image, before object-fit cropping or letterboxing. */
  xPercent: number
  yPercent: number
  label: string
  prompt: ReactNode
  answer?: ReactNode
  /** Original-image bounds kept clear of the selected callout. */
  targetBounds?: {
    xPercent: number
    yPercent: number
    widthPercent: number
    heightPercent: number
  }
}
export interface SceneExplorerProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'onSelect'
> {
  imageUrl: string
  imageAlt: string
  hotspots: readonly SceneHotspot[]
  selectedId?: string
  visitedIds: readonly string[]
  onSelect: (id: string) => void
  /** Consumer owns playback and recording selection. No speech synthesis fallback. */
  onPlayHotspot?: (id: string) => void
  playingId?: string
  /** Labeled audio targets over a scene, without the exploration answer panel. */
  presentation?: 'explore' | 'labels'
  /** Keep named scene targets visible on compact frames when the activity depends on their names. */
  labelVisibility?: 'responsive' | 'always'
  answerVisible?: boolean
  onAnswerToggle?: () => void
  labels?: Partial<{
    initial: string
    show: string
    hide: string
    progress: string
    play: string
  }>
}

export interface SceneImageGeometry {
  left: number
  top: number
  width: number
  height: number
  frameWidth: number
  frameHeight: number
}
export interface SceneTargetRect {
  left: number
  top: number
  width: number
  height: number
}
export interface SceneCalloutLayout {
  left: number
  top: number
  gutter: number
  placement: 'above' | 'below' | 'left' | 'right'
  arrow: number
}
