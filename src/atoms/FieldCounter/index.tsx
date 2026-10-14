import * as Styled from './styles'
import type { FieldCounterProps } from './types'
export function FieldCounter({ children, ...props }: FieldCounterProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { FieldCounterProps } from './types'
