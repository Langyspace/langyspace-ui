import type { ComponentPropsWithRef, ReactNode, MouseEventHandler } from 'react'
import { Container, ResendButton } from './AuthResendAction.styles'

export interface AuthResendActionProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
  onResend: MouseEventHandler<HTMLButtonElement>
  resendLabel: ReactNode
  disabled?: boolean
}

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
