import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { LinkDestination } from '../../foundations/links/types'

export type NavigationLinkProps = Omit<ComponentPropsWithRef<'a'>, 'href'> &
  LinkDestination & {
    children: ReactNode
  }
