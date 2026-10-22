import type { DocumentNavigationLinkProps } from './DocumentNavigationLink.types'
import * as Styled from './DocumentNavigationLink.styles'

export function DocumentNavigationLink({
  children,
  ...props
}: DocumentNavigationLinkProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
