import * as Styled from './DetailRow.styles'
import type { DetailRowProps } from './DetailRow.types'

export function DetailRow({
  icon,
  label,
  value,
  action,
  ...props
}: DetailRowProps) {
  return (
    <Styled.Root {...props}>
      {icon ? <Styled.Icon aria-hidden>{icon}</Styled.Icon> : null}
      <Styled.Content>
        <Styled.Label>{label}</Styled.Label>
        <Styled.Value>{value}</Styled.Value>
      </Styled.Content>
      {action}
    </Styled.Root>
  )
}
