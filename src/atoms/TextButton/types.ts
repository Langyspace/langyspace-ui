import type { ComponentPropsWithRef, ReactNode } from 'react'

export type TextButtonVariant = 'emphasized' | 'subtle' | 'danger'

export interface TextButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
  iconStart?: ReactNode
  iconEnd?: ReactNode
  variant?: TextButtonVariant
}
