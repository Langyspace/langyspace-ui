import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface SceneHotspot {
  id: string
  xPercent: number
  yPercent: number
  label: string
  prompt: ReactNode
  answer?: ReactNode
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
  answerVisible?: boolean
  onAnswerToggle?: () => void
  labels?: Partial<{
    initial: string
    show: string
    hide: string
    progress: string
  }>
}
