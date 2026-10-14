import * as Styled from './styles'
import type { AuthSuccessStateProps } from './types'

export function AuthSuccessState({
  children,
  ...props
}: AuthSuccessStateProps) {
  return <Styled.Container {...props}>{children}</Styled.Container>
}

export type { AuthSuccessStateProps } from './types'
