import type { DefinitionItemProps } from './DefinitionItem.types'
import * as Styled from './DefinitionItem.styles'

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
