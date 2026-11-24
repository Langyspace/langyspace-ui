import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface MobileFrameProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'title'
> {
  /** App/screen heading supplied by the consumer; the frame does not invent app actions. */
  title?: ReactNode
  /** Isolated light mobile viewport for the same components used in the Student app. */
  screenMode?: 'content' | 'application'
}
