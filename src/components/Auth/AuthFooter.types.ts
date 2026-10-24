import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface AuthFooterProps extends ComponentPropsWithRef<'p'> {
  children: ReactNode
  links: readonly { href: string; label: ReactNode }[]
  placement?: 'brand' | 'mobile'
}
