import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface MobileFrameProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'title'
> {
  /** Paired previews keep the same phone chrome with a smaller presentation bound. */
  size?: 'regular' | 'compact'
  /** App/screen heading supplied by the consumer; the frame does not invent app actions. */
  title?: ReactNode
}
