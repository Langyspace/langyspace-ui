import type { AuthLegalTextProps } from './AuthLegalText.types'
import * as Styled from './AuthLegalText.styles'

export function AuthLegalText({ children, ...props }: AuthLegalTextProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
