import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'

const Root = styled.nav.withConfig({
  componentId: 'lsui-sc-sidebar-navigation',
})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export interface SidebarNavigationProps extends ComponentPropsWithRef<'nav'> {
  children: ReactNode
}

export function SidebarNavigation({
  children,
  ...props
}: SidebarNavigationProps) {
  return <Root {...props}>{children}</Root>
}
