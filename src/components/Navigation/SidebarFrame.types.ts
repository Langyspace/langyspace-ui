import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface SidebarFrameProps extends ComponentPropsWithRef<'aside'> {
  children: ReactNode
}
