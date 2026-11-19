import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface ExercisePanelProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'title'
> {
  title?: ReactNode
  counter?: ReactNode
  media?: ReactNode
  layout?: 'stacked' | 'split'
  /** Warm-up keeps media above choices in one centered column, regardless of layout. */
  variant?: 'default' | 'warmup'
}
