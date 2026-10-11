import * as Styled from './styles'
import type { AuthTitleProps } from './types'

export function AuthTitle({ children, ...props }: AuthTitleProps) {
  return <Styled.Title {...props}>{children}</Styled.Title>
}

export type { AuthTitleProps } from './types'
