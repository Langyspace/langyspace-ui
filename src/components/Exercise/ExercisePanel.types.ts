import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface ExercisePanelProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'title'
> {
  title?: ReactNode
  counter?: ReactNode
  /** Illustrative desktop chrome; labels are supplied by the exercise, never a simulated save. */
  workstationMeta?: { appLabel?: string; clock?: string; date?: string }
  media?: ReactNode
  layout?: 'stacked' | 'split'
  /** Flow content by default in monitor mode; workstation keeps its compact form grid. */
  monitorLayout?: 'flow' | 'form'
  /** Warm-up keeps media above choices in one centered column, regardless of layout. */
  variant?: 'default' | 'warmup' | 'workstation' | 'monitor'
}

export type ExerciseMonitorProps = Pick<
  ExercisePanelProps,
  'title' | 'workstationMeta' | 'children'
> & { form: boolean }
