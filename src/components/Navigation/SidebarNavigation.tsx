import type { SidebarNavigationProps } from './SidebarNavigation.types'
import * as Styled from './SidebarNavigation.styles'

export function SidebarNavigation({
  children,
  ...props
}: SidebarNavigationProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
