import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface NoticeBannerProps extends Omit<
  ComponentPropsWithoutRef<'aside'>,
  'title'
> {
  icon: ReactNode
  title: string
  children: ReactNode
  actions?: ReactNode
}
