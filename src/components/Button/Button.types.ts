import type { ComponentPropsWithRef, ReactNode } from 'react'
import type {
  ActionDensity,
  ActionRecipeStyleProps,
  ActionSize,
} from '../../foundations/actions/types'

export type ButtonTextVariant = 'text' | 'text-subtle' | 'text-danger'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'brand'
  | 'danger'
  | 'success'
  | 'inverse'
  | 'text'
  | 'text-subtle'
  | 'text-danger'

export type ButtonSize = ActionSize

export type ButtonDensity = ActionDensity

type NativeButtonProps = Omit<
  ComponentPropsWithRef<'button'>,
  'children' | 'color'
>

export interface ButtonProps extends NativeButtonProps {
  children: ReactNode
  density?: ButtonDensity
  fullWidth?: boolean
  iconEnd?: ReactNode
  iconStart?: ReactNode
  isLoading?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

export interface ButtonStyleProps extends ActionRecipeStyleProps {
  $textVariant?: ButtonTextVariant
}
