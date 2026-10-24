import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface BottomNavigationProps extends ComponentPropsWithRef<'nav'> {
  children: ReactNode
}
