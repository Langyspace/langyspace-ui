import * as Styled from './StatusChip.styles'

import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type StatusChipTone =
  'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'brand'

export type StatusChipSize = 'sm' | 'md'

export interface StatusChipProps extends Omit<
  ComponentPropsWithoutRef<'span'>,
  'color'
> {
  children: ReactNode
  iconStart?: ReactNode
  indicator?: boolean
  size?: StatusChipSize
  tone?: StatusChipTone
}

export function StatusChip({
  children,
  iconStart,
  indicator = false,
  size = 'md',
  title,
  tone = 'neutral',
  ...props
}: StatusChipProps) {
  const tooltip =
    title ??
    (typeof children === 'string' || typeof children === 'number'
      ? String(children)
      : undefined)

  return (
    <Styled.Chip {...props} $size={size} $tone={tone} title={tooltip}>
      {indicator ? <Styled.Indicator $tone={tone} aria-hidden="true" /> : null}
      {iconStart ? (
        <Styled.Icon aria-hidden="true">{iconStart}</Styled.Icon>
      ) : null}
      <Styled.Label>{children}</Styled.Label>
    </Styled.Chip>
  )
}
