import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface ChoiceCardProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
  /** Teacher-led exercises use a dark-green selection with white text. */
  variant?: 'default' | 'lesson'
}
