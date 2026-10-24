import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface PracticeResultPanelProps extends ComponentPropsWithRef<'div'> {
  children?: ReactNode
  /** Heading content; native title remains the HTML tooltip. */
  heading?: ReactNode
  description?: ReactNode
  actions?: ReactNode
  /** null suppresses the default completion mark. */
  icon?: ReactNode
}

export type ResultMarkProps = Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'aria-hidden'
>
