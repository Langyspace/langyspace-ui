import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface ConversationRowProps extends Omit<
  ComponentPropsWithRef<'button'>,
  'children' | 'title'
> {
  avatar: ReactNode
  title: string
  preview: string
  meta?: ReactNode
  badge?: ReactNode
  unread?: boolean
}
