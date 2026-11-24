import type { ComponentPropsWithRef, ReactNode } from 'react'

/** Static message preview. Consumers own contact identity and message content. */
export interface MessagePhoneFrameProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'children'
> {
  contact: ReactNode
  children: ReactNode
  /** Default follows the current phone recipe; large matches the spacious listening preview. */
  size?: 'default' | 'large'
  time?: string
  composerPlaceholder?: string
  /** Native playback viewport attributes/ref, without replacing the shared conversation owner. */
  conversationProps?: Omit<ComponentPropsWithRef<'div'>, 'children'>
  composerAction?: ReactNode
}
