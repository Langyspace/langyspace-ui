import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface LessonHintProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
  /** Identifies this hint to assistive technology without repeating the question. */
  context?: string
  label?: string
  hideLabel?: string
}
