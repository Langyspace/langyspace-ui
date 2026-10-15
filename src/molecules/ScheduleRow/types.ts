import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface ScheduleRowProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'onClick' | 'onKeyDown' | 'role' | 'tabIndex'
> {
  time: ReactNode
  participant: ReactNode
  actions?: ReactNode
  muted?: boolean
  onOpen: () => void
  openLabel: string
}
