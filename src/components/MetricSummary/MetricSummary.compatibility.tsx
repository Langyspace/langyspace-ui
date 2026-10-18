import * as Styled from './MetricSummary.styles'
import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface MetricValueProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

/** @deprecated Prefer MetricSummary; retained for existing consumers. */
export function MetricValue(props: MetricValueProps) {
  return <Styled.Value {...props} data-ui-metric-value />
}

export interface MetricLabelProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

/** @deprecated Prefer MetricSummary; retained for existing consumers. */
export function MetricLabel(props: MetricLabelProps) {
  return <Styled.Label {...props} data-ui-metric-label />
}
