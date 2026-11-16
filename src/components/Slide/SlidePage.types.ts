import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface SlidePageProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'title'
> {
  title: ReactNode
  eyebrow?: ReactNode
  instruction?: ReactNode
  tools?: ReactNode
  /** The reference uses 600px for focused tasks and 1040px for wider exercises. */
  width?: 'focused' | 'wide'
  tone?: 'default' | 'inverse'
}
