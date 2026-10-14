import * as Styled from './styles'
import type { NavigationButtonProps } from './types'
export function NavigationButton({
  type = 'button',
  ...props
}: NavigationButtonProps) {
  return <Styled.Root {...props} type={type} />
}
export type { NavigationButtonProps } from './types'
