import * as Styled from './MetricSummary.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface MetricSummaryProps extends ComponentPropsWithRef<'div'> {
  /** Free composition retained for existing consumers. Content props take precedence. */
  children?: ReactNode
  value?: ReactNode
  label?: ReactNode
}

export function MetricSummary({
  value,
  label,
  children,
  ...props
}: MetricSummaryProps) {
  const hasContent = value !== undefined || label !== undefined

  return (
    <Styled.Root {...props}>
      {hasContent ? (
        <>
          <Styled.Value data-ui-metric-value>{value}</Styled.Value>
          <Styled.Label data-ui-metric-label>{label}</Styled.Label>
        </>
      ) : (
        children
      )}
    </Styled.Root>
  )
}
