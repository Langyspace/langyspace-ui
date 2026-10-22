import type { ComponentPropsWithRef, ReactNode, MouseEventHandler } from 'react'

export interface AuthResendActionProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
  onResend: MouseEventHandler<HTMLButtonElement>
  resendLabel: ReactNode
  disabled?: boolean
}
