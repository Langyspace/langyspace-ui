import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface NotificationItemProps extends Omit<
  ComponentPropsWithRef<'button'>,
  'children' | 'title'
> {
  avatar: ReactNode
  title: ReactNode
  description: ReactNode
  meta: ReactNode
  action?: ReactNode
}
