import * as Styled from './styles'
import type { DefinitionItemProps } from './types'

export function DefinitionItem({
  label,
  value,
  valueTitle,
  ...props
}: DefinitionItemProps) {
  return (
    <Styled.Root {...props} data-ui-definition-item>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Value title={valueTitle}>{value}</Styled.Value>
    </Styled.Root>
  )
}

export type { DefinitionItemProps } from './types'
