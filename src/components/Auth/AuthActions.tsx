import type { AuthActionsProps } from './AuthActions.types'
import * as Styled from './AuthActions.styles'

export function AuthActions({ children, ...props }: AuthActionsProps) {
  return <Styled.Actions {...props}>{children}</Styled.Actions>
}
