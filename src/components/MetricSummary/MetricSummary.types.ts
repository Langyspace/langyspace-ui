import type { ComponentPropsWithRef, ReactNode } from 'react'

/** `tile` is the left-aligned, bordered card used inside practice previews. */
export type MetricSummaryVariant = 'summary' | 'tile'

export interface MetricSummaryProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  value: ReactNode
  label: ReactNode
  /** @default 'summary' */
  variant?: MetricSummaryVariant
}
