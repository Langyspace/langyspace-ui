import * as Styled from './styles'
import type { FieldLabelRowProps } from './types'

export function FieldLabelRow({ children, ...props }: FieldLabelRowProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { FieldLabelRowProps } from './types'
