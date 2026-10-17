import type { ComponentPropsWithRef, ReactNode } from 'react'
import { styled } from 'styled-components'
import { Button } from '.'

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
