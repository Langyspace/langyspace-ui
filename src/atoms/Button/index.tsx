import { IconSlot } from '../../internal/IconSlot'
import { Spinner } from '../../primitives/Spinner'
import * as Styled from './styles'
import type { ButtonProps } from './types'

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
