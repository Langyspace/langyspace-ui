import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface FormErrorProps extends Omit<
  ComponentPropsWithRef<'p'>,
  'role'
> {
  children: ReactNode
}
