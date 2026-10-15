import * as Styled from './styles'
import type { AuthTokenLabelProps } from './types'
export function AuthTokenLabel({ children, ...props }: AuthTokenLabelProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { AuthTokenLabelProps } from './types'
