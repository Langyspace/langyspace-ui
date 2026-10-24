import type { FormStackProps } from './FormStack.types'
import * as Styled from './FormStack.styles'

export function FormStack({ children, ...props }: FormStackProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
