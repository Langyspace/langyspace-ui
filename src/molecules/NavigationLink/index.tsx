import * as Styled from './styles'
import type { NavigationLinkProps } from './types'
export function NavigationLink({ children, ...props }: NavigationLinkProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { NavigationLinkProps } from './types'
