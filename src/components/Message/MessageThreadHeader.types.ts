import type { ComponentPropsWithRef, ReactNode } from 'react'

/** `compact` shows the leading action only below the mobile shell breakpoint. */
export type MessageThreadHeaderLeadingActionDisplay = 'always' | 'compact'

export interface MessageThreadHeaderProps extends Omit<
  ComponentPropsWithRef<'header'>,
  'children' | 'title'
> {
  imageUrl?: string
  initials: string
  leadingAction?: ReactNode
  /** @default 'always' */
  leadingActionDisplay?: MessageThreadHeaderLeadingActionDisplay
  subtitle?: string
  title: string
  trailingAction?: ReactNode
}
