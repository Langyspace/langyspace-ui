import type { BottomNavigationProps } from './BottomNavigation.types'
import * as Styled from './BottomNavigation.styles'

export function BottomNavigation({
  children,
  ...props
}: BottomNavigationProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
