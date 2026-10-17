import * as Styled from './styles'
import type { AuthBrandFooterProps } from './types'

export function AuthBrandFooter({ children, ...props }: AuthBrandFooterProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { AuthBrandFooterProps } from './types'
