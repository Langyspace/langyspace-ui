import * as Styled from './styles'
import type { ToggleButtonProps } from './types'
export function ToggleButton({ type = 'button', ...props }: ToggleButtonProps) {
  return <Styled.Root {...props} type={type} />
}
export type { ToggleButtonProps } from './types'
