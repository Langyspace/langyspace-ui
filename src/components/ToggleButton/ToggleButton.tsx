import * as Styled from './ToggleButton.styles'
import type { ToggleButtonProps } from './ToggleButton.types'

export function ToggleButton({ type = 'button', ...props }: ToggleButtonProps) {
  return <Styled.Root {...props} type={type} />
}
