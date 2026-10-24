import { IconSlot } from '../../internal/IconSlot/IconSlot'
import { Spinner } from '../Spinner/Spinner'
import * as Styled from './Button.styles'
import type { ButtonProps } from './Button.types'

export function Button({
  children,
  density = 'regular',
  fullWidth = false,
  iconEnd,
  iconStart,
  loading = false,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const isText =
    variant === 'text' || variant === 'text-subtle' || variant === 'text-danger'
  const endIcon = loading ? <Spinner /> : iconEnd

  return (
    <Styled.Button
      {...props}
      {...(loading && { 'aria-busy': true, disabled: true })}
      type={type}
      $density={density}
      $fullWidth={fullWidth}
      $shape="pill"
      $size={size}
      $variant={isText ? 'primary' : variant}
      $textVariant={isText ? variant : undefined}
      data-action-appearance={isText ? 'text' : 'button'}
      data-loading={loading ? 'true' : undefined}
      data-density={density}
      data-size={size}
    >
      {isText ? iconStart : <IconSlot icon={iconStart} />}
      {children}
      {isText ? endIcon : <IconSlot icon={endIcon} />}
    </Styled.Button>
  )
}
