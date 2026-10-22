import type { FieldLabelRowProps } from './FieldLabelRow.types'
import * as Styled from './FieldLabelRow.styles'

export function FieldLabelRow({ children, ...props }: FieldLabelRowProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
