import type { FieldCounterProps } from './FieldCounter.types'
import * as Styled from './FieldCounter.styles'

export function FieldCounter({ children, ...props }: FieldCounterProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
