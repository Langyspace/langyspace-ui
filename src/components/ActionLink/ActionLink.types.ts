import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { LinkDestination } from '../../foundations/links/types'
import type { ActionDensity, ActionSize } from '../../foundations/actions/types'

export type ActionLinkVariant = 'primary' | 'secondary' | 'tertiary' | 'brand'

export interface ActionLinkBaseProps extends Omit<
  ComponentPropsWithRef<'a'>,
  'aria-disabled' | 'children' | 'color' | 'href'
> {
  children: ReactNode
  density?: ActionDensity
  fullWidth?: boolean
  iconEnd?: ReactNode
  iconStart?: ReactNode
  size?: ActionSize
  variant?: ActionLinkVariant
}

export type ActionLinkProps = ActionLinkBaseProps & LinkDestination
