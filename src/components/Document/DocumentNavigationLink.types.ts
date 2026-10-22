import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { LinkDestination } from '../../foundations/links/types'

export type DocumentNavigationLinkProps = Omit<
  ComponentPropsWithRef<'a'>,
  'href'
> &
  LinkDestination & {
    children: ReactNode
  }
