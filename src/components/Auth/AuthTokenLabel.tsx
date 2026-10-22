import type { AuthTokenLabelProps } from './AuthTokenLabel.types'
import * as Styled from './AuthTokenLabel.styles'

export function AuthTokenLabel({ children, ...props }: AuthTokenLabelProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
