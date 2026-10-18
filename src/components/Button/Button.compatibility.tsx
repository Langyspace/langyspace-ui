import type { ComponentPropsWithRef, ReactNode } from 'react'
import { styled } from 'styled-components'
import { Button } from './Button'
import type { ButtonProps } from './Button.types'
import * as token from '../../foundations/tokenValues'

export type TextButtonVariant = 'emphasized' | 'subtle' | 'danger'

export interface TextButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
  iconStart?: ReactNode
  iconEnd?: ReactNode
  variant?: TextButtonVariant
}

const variants = {
  emphasized: 'text',
  subtle: 'text-subtle',
  danger: 'text-danger',
} as const

// Keep the published marker for styled(TextButton) and SSR consumers.
const LegacyTextButton = styled(Button).withConfig({
  componentId: 'lsui-sc-text-button',
})``

/** @deprecated Use Button with variant="text", "text-subtle" or "text-danger". */
export function TextButton({
  variant = 'emphasized',
  ...props
}: TextButtonProps) {
  return (
    <LegacyTextButton
      {...props}
      variant={variants[variant]}
      data-variant={variant}
    />
  )
}

const LegacyAuthBackButton = styled(Button).withConfig({
  componentId: 'lsui-sc-auth-back-button',
})`
  margin-bottom: ${token.spacing5};

  @media (min-width: 768px) {
    margin-bottom: ${token.spacing6};
  }
`

const LegacyAuthSubmitButton = styled(Button).withConfig({
  componentId: 'lsui-sc-auth-submit-button',
})`
  margin-top: clamp(${token.spacing4}, 3svh, ${token.spacing6});

  @media (max-width: 900px) {
    margin-top: clamp(${token.spacing3}, 2.5svh, ${token.spacing5});
  }
`

export type AuthBackButtonProps = Omit<
  ButtonProps,
  'size' | 'variant' | 'fullWidth'
>
export type AuthSubmitButtonProps = Omit<
  ButtonProps,
  'size' | 'variant' | 'fullWidth'
>

/** @deprecated Use Button; preserve the auth spacing in the surrounding composition. */
export function AuthBackButton(props: AuthBackButtonProps) {
  return <LegacyAuthBackButton {...props} size="sm" variant="secondary" />
}

/** @deprecated Use Button; preserve the auth spacing in the surrounding composition. */
export function AuthSubmitButton({
  type = 'submit',
  ...props
}: AuthSubmitButtonProps) {
  return (
    <LegacyAuthSubmitButton
      {...props}
      type={type}
      fullWidth
      size="lg"
      variant="primary"
    />
  )
}
