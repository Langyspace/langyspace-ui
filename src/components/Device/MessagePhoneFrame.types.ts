import type { ComponentPropsWithRef, ReactNode } from 'react'

/** Static message preview. Consumers own contact identity and message content. */
export interface MessagePhoneFrameProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'children'
> {
  contact: ReactNode
  children: ReactNode
  time?: string
  composerPlaceholder?: string
}
