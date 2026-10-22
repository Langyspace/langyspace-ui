import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface PracticeCardCoverProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
  value?: ReactNode
  label?: ReactNode
}
