import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface SlidePageProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'title'
> {
  title: ReactNode
  eyebrow?: ReactNode
  instruction?: ReactNode
  tools?: ReactNode
  /** Optional introductory content before the exercise heading. */
  lead?: ReactNode
  /** The reference uses 600px for focused tasks, 760px for standard content and 1040px for wider exercises. */
  width?:
    'focused' | 'standard' | 'wide' | 'reading' | 'exercise' | 'conversation'
  density?: 'regular' | 'compact'
  tone?: 'default' | 'inverse'
}
