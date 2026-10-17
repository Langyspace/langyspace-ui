import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface SidebarNavigationProps extends ComponentPropsWithRef<'nav'> {
  children: ReactNode
}
