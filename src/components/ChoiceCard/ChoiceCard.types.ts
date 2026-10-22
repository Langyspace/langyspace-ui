import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface ChoiceCardProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
}
