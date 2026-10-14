import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface PageTitleProps extends ComponentPropsWithRef<'h1'> {
  children: ReactNode
}
