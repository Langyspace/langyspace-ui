import type { NavigationLinkProps } from './NavigationLink.types'
import * as Styled from './NavigationLink.styles'

export function NavigationLink({ children, ...props }: NavigationLinkProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
