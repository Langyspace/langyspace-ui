import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface NavigationButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
}
