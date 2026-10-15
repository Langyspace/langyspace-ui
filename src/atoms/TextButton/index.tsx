import * as Styled from './styles'
import type { TextButtonProps } from './types'
export function TextButton({
  children,
  iconStart,
  iconEnd,
  variant = 'emphasized',
  type = 'button',
  ...props
}: TextButtonProps) {
  return (
    <Styled.Root {...props} type={type} data-variant={variant}>
      {iconStart}
      {children}
      {iconEnd}
    </Styled.Root>
  )
}
export type { TextButtonProps } from './types'
