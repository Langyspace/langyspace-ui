import * as Styled from './styles'
import type { BottomNavigationLinkProps } from './types'

export function BottomNavigationLink({
  children,
  ...props
}: BottomNavigationLinkProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { BottomNavigationLinkProps } from './types'
