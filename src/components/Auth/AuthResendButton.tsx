import type { ComponentPropsWithRef, ReactNode } from 'react'

import { authRecipe } from '../../foundations/authRecipe'
import { Pressable } from '../Pressable'
import { styled } from 'styled-components'

const ResendButton = styled(Pressable).withConfig({
  componentId: 'lsui-sc-auth-resend-button',
})`
  border: 0;
  background: transparent;
  color: ${authRecipe.colors.text.primary};
  font-weight: ${authRecipe.typography.fontWeight.semibold};

  &:disabled {
    color: ${authRecipe.colors.text.subtle};
  }
`

export interface AuthResendButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
}

export function AuthResendButton({
  children,
  type = 'button',
  ...props
}: AuthResendButtonProps) {
  return (
    <ResendButton {...props} type={type}>
      {children}
    </ResendButton>
  )
}
