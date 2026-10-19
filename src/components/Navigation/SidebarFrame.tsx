import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.aside.withConfig({
  componentId: 'lsui-sc-sidebar-frame',
})`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex-shrink: 0;
  height: 100svh;
  background: ${token.colorNeutral0};
  border-right: 1px solid ${token.colorSurfaceBorderSubtle};
`

export interface SidebarFrameProps extends ComponentPropsWithRef<'aside'> {
  children: ReactNode
}

export function SidebarFrame({ children, ...props }: SidebarFrameProps) {
  return <Root {...props}>{children}</Root>
}
