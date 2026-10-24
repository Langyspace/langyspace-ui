import { Container, ResendButton } from './AuthResendAction.styles'
import type { AuthResendActionProps } from './AuthResendAction.types'

export function AuthResendAction({
  children,
  onResend,
  resendLabel,
  disabled = false,
  ...props
}: AuthResendActionProps) {
  return (
    <Container {...props}>
      {children}
      <ResendButton type="button" disabled={disabled} onClick={onResend}>
        {resendLabel}
      </ResendButton>
    </Container>
  )
}
