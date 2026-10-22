import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface PageDescriptionProps extends ComponentPropsWithRef<'p'> {
  children: ReactNode
}
