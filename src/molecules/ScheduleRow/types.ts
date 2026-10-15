import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface ScheduleRowProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  time: ReactNode
  participant: ReactNode
  actions?: ReactNode
  muted?: boolean
}
