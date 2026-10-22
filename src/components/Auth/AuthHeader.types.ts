import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface AuthHeaderProps extends Omit<
  ComponentPropsWithRef<'h2'>,
  'title' | 'children'
> {
  title: ReactNode
  highlight?: ReactNode
  paragraphs?: readonly ReactNode[]
  backAction?: ReactNode
}
