import type { SidebarFrameProps } from './SidebarFrame.types'
import * as Styled from './SidebarFrame.styles'

export function SidebarFrame({ children, ...props }: SidebarFrameProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
