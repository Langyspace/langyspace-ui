import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface ToggleButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
}
