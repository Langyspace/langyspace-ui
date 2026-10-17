import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface NavigationLinkProps extends ComponentPropsWithRef<'a'> {
  children: ReactNode
  href: string
}
