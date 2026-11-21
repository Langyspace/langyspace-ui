import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface MobileFrameProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'title'
> {
  /** App/screen heading supplied by the consumer; the frame does not invent app actions. */
  title?: ReactNode
}
