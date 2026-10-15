import type { ButtonProps } from '../../atoms/Button/types'
export type AuthBackButtonProps = Omit<
  ButtonProps,
  'size' | 'variant' | 'fullWidth'
>
