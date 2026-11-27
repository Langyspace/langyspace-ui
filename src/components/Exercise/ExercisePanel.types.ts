import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface ExercisePanelProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'title'
> {
  title?: ReactNode
  counter?: ReactNode
  /** Controlled sequence of short items; the consumer owns content, answers and retained attempts. */
  navigation?: {
    index: number
    count: number
    onChange: (index: number) => void
    labels?: { previous?: string; next?: string; region?: string }
  }
  /** Illustrative desktop chrome; labels are supplied by the exercise, never a simulated save. */
  workstationMeta?: { appLabel?: string; clock?: string; date?: string }
  media?: ReactNode
  /** Secondary visual cue over a warm-up image, such as the flag in a country question. */
  mediaBadge?: { src: string; alt: string }
  layout?: 'stacked' | 'split'
  /** Flow content by default in monitor mode; workstation keeps its compact form grid. */
  monitorLayout?: 'flow' | 'form'
  /** Optional screen proportion; tall content can grow instead of being clipped. */
  screenAspectRatio?: number
  /** Text alignment inside the screen only; the window bar keeps its native layout. */
  screenTextAlign?: 'start' | 'center'
  /** Bound a warm-up illustration to the presentation media scale; natural preserves its full-width framing. */
  warmupMediaSizing?: 'natural' | 'presentation'
  /** Warm-up keeps media above choices in one centered column, regardless of layout. */
  variant?: 'default' | 'warmup' | 'workstation' | 'monitor' | 'reading'
}

export type ExerciseMonitorProps = Pick<
  ExercisePanelProps,
  | 'title'
  | 'workstationMeta'
  | 'children'
  | 'screenAspectRatio'
  | 'screenTextAlign'
  | 'media'
> & { form: boolean }
