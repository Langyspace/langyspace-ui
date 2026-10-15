import * as Styled from './styles'
import type { SidebarFrameProps } from './types'
export function SidebarFrame({ children, ...props }: SidebarFrameProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { SidebarFrameProps } from './types'
