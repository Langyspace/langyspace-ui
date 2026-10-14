import * as Styled from './styles'
import type { AuthResendButtonProps } from './types'

export function AuthResendButton({
  children,
  type = 'button',
  ...props
}: AuthResendButtonProps) {
  return (
    <Styled.ResendButton {...props} type={type}>
      {children}
    </Styled.ResendButton>
  )
}

export type { AuthResendButtonProps } from './types'
