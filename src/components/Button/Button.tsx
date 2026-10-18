import { IconSlot } from '../../internal/IconSlot'
import { Spinner } from '../Spinner/Spinner'
import * as Styled from './Button.styles'
import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { ActionDensity, ActionSize } from '../../foundations/actions/types'

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

export function Button({
  children,
  density = 'regular',
  fullWidth = false,
  iconEnd,
  iconStart,
  isLoading = false,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const isText =
    variant === 'text' || variant === 'text-subtle' || variant === 'text-danger'
  const endIcon = isLoading ? <Spinner /> : iconEnd

  return (
    <Styled.Button
      {...props}
      {...(isLoading && { 'aria-busy': true, disabled: true })}
      type={type}
      $density={density}
      $fullWidth={fullWidth}
      $shape="pill"
      $size={size}
      $variant={isText ? 'primary' : variant}
      $textVariant={isText ? variant : undefined}
      data-action-appearance={isText ? 'text' : 'button'}
      data-loading={isLoading ? 'true' : undefined}
      data-density={density}
      data-size={size}
    >
      {isText ? iconStart : <IconSlot icon={iconStart} />}
      {children}
      {isText ? endIcon : <IconSlot icon={endIcon} />}
    </Styled.Button>
  )
}
