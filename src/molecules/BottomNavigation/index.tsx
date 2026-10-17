import * as Styled from './styles'
import type { BottomNavigationProps } from './types'

export function BottomNavigation({
  children,
  ...props
}: BottomNavigationProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { BottomNavigationProps } from './types'
