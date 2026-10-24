import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface AuthFormProps extends ComponentPropsWithRef<'form'> {
  children: ReactNode
}
