import * as Styled from './NavigationButton.styles'
import type { NavigationButtonProps } from './NavigationButton.types'

export function NavigationButton({
  type = 'button',
  ...props
}: NavigationButtonProps) {
  return <Styled.Root {...props} type={type} />
}
