import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface ExercisePanelProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'title'
> {
  title?: ReactNode
  counter?: ReactNode
  media?: ReactNode
  layout?: 'stacked' | 'split'
}
