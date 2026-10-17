import * as Styled from './styles'
import type { DocumentNavigationLinkProps } from './types'

export function DocumentNavigationLink({
  children,
  ...props
}: DocumentNavigationLinkProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { DocumentNavigationLinkProps } from './types'
