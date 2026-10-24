import type { ComponentPropsWithRef } from 'react'
import type { LinkDestination } from '../../foundations/links/types'

export type CardLinkProps = Omit<ComponentPropsWithRef<'a'>, 'href'> &
  LinkDestination
