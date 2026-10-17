import * as Styled from './styles'
import type { AuthFooterLinkProps } from './types'

export function AuthFooterLink({ children, ...props }: AuthFooterLinkProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { AuthFooterLinkProps } from './types'
