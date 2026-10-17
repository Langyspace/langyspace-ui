import * as Styled from './styles'
import type { SidebarNavigationProps } from './types'

export function SidebarNavigation({
  children,
  ...props
}: SidebarNavigationProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { SidebarNavigationProps } from './types'
