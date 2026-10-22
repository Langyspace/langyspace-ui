import { IconSlot } from '../../internal/IconSlot/IconSlot'
import { Spinner } from '../Spinner/Spinner'
import * as Styled from './IconButton.styles'
import type { IconButtonProps, IconButtonVariant } from './IconButton.types'
import type { ActionVariant } from '../../foundations/actions/types'

const actionVariants = {
  brand: 'brand',
  danger: 'tertiary',
  inverse: 'inverse',
  neutral: 'secondary',
  subtle: 'tertiary',
  success: 'success',
} as const satisfies Record<IconButtonVariant, ActionVariant>

export function IconButton({
  children,
  loading = false,
  shape = 'circle',
  size = 'md',
  type = 'button',
  variant = 'neutral',
  ...props
}: IconButtonProps) {
  return (
    <Styled.IconButton
      {...props}
      {...(loading && { 'aria-busy': true, disabled: true })}
      type={type}
      $density="regular"
      $fullWidth={false}
      $iconVariant={variant}
      $shape={shape === 'circle' ? 'pill' : 'rounded'}
      $size={size}
      $variant={actionVariants[variant]}
      data-loading={loading ? 'true' : undefined}
      data-size={size}
    >
      <IconSlot icon={loading ? <Spinner /> : children} />
    </Styled.IconButton>
  )
}
