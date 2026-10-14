import * as Styled from './styles'
import type { AuthResendActionProps } from './types'

export function AuthResendAction({
  children,
  ...props
}: AuthResendActionProps) {
  return <Styled.Container {...props}>{children}</Styled.Container>
}

export type { AuthResendActionProps } from './types'
