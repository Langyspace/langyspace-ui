import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface NoticeBannerProps extends Omit<
  ComponentPropsWithRef<'aside'>,
  'title'
> {
  icon: ReactNode
  title: string
  children: ReactNode
  actions?: ReactNode
}
