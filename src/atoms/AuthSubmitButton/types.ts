import type { ButtonProps } from '../../atoms/Button/types'
export type AuthSubmitButtonProps = Omit<
  ButtonProps,
  'size' | 'variant' | 'fullWidth'
>
