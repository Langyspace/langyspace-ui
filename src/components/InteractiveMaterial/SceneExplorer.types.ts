import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface SceneHotspot {
  id: string
  /** Coordinates in the original image, before object-fit cropping or letterboxing. */
  xPercent: number
  yPercent: number
  label: string
  prompt: ReactNode
  /** Short usage example shown with the vocabulary label, never as another question. */
  example?: ReactNode
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
  /** Fit the complete scene into a lesson viewport, preserving image-coordinate hotspots. */
  imageSizing?: 'natural' | 'presentation'
  hotspots: readonly SceneHotspot[]
  /** Native relationship lines between hotspot IDs, in the same image geometry. */
  connections?: readonly { from: string; to: string }[]
  selectedId?: string
  visitedIds: readonly string[]
  onSelect: (id: string) => void
  /** Optional explicit close action for dense scenes and small-screen callouts. */
  onDismiss?: () => void
  /** Consumer owns playback and recording selection. No speech synthesis fallback. */
  onPlayHotspot?: (id: string) => void
  playingId?: string
  /** Labeled audio targets over a scene, without the exploration answer panel. */
  /** Vocabulary keeps each revealed label visible while its example remains in the selected callout. */
  presentation?: 'explore' | 'labels' | 'vocabulary'
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
