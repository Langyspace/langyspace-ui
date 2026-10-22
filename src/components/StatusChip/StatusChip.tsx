import * as Styled from './StatusChip.styles'
import type { StatusChipProps } from './StatusChip.types'

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
