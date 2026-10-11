import * as Styled from './styles'
import type { AuthDescriptionProps } from './types'

export function AuthDescription({ children, ...props }: AuthDescriptionProps) {
  return <Styled.Description {...props}>{children}</Styled.Description>
}

export type { AuthDescriptionProps } from './types'
