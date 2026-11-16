import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface RevealSequenceStage {
  id: string
  image?: { src: string; alt: string }
  content?: ReactNode
  /** Accessible action leading to this stage. */
  revealLabel: string
}
export interface RevealSequenceCardProps extends Omit<
  ComponentPropsWithRef<'button'>,
  'title' | 'children' | 'onChange' | 'onClick'
> {
  title: ReactNode
  stages: readonly RevealSequenceStage[]
  stageId: string
  onAdvance: (stageId: string) => void
  emptyLabel?: string
}
