import * as Styled from './styles'
import type { AuthLegalTextProps } from './types'

export function AuthLegalText({ children, ...props }: AuthLegalTextProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { AuthLegalTextProps } from './types'
