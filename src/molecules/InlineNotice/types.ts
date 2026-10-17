import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface InlineNoticeProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}
