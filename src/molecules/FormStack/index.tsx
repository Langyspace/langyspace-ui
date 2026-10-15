import * as Styled from './styles'
import type { FormStackProps } from './types'
export function FormStack({ children, ...props }: FormStackProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { FormStackProps } from './types'
