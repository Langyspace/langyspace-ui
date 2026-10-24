import type { BottomNavigationLinkProps } from './BottomNavigationLink.types'
import * as Styled from './BottomNavigationLink.styles'

export function BottomNavigationLink({
  children,
  ...props
}: BottomNavigationLinkProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
