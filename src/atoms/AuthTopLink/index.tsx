import * as Styled from './styles'
import type { AuthTopLinkProps } from './types'

export function AuthTopLink({ children, ...props }: AuthTopLinkProps) {
  return <Styled.Link {...props}>{children}</Styled.Link>
}

export type { AuthTopLinkProps } from './types'
