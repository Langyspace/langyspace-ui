import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface ChoiceCardProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
  /** Teacher-led exercises retain readable text and a green selection border. */
  variant?: 'default' | 'lesson'
}
