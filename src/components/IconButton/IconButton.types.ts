import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { AccessibleName } from '../../foundations/accessibility'
import type { ActionSize } from '../../foundations/actions/types'

export type IconButtonVariant =
  'neutral' | 'subtle' | 'brand' | 'success' | 'danger' | 'inverse'

export type IconButtonSize = ActionSize

export type IconButtonShape = 'circle' | 'rounded'

type NativeIconButtonProps = Omit<
  ComponentPropsWithRef<'button'>,
  'aria-label' | 'aria-labelledby' | 'children' | 'color'
>

export type IconButtonProps = NativeIconButtonProps &
  AccessibleName & {
    children: ReactNode
    loading?: boolean
    shape?: IconButtonShape
    size?: IconButtonSize
    variant?: IconButtonVariant
  }
