import * as Styled from './styles'
import type { AuthMobileFooterProps } from './types'

export function AuthMobileFooter({
  children,
  ...props
}: AuthMobileFooterProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { AuthMobileFooterProps } from './types'
