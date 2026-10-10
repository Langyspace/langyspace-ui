import * as Styled from './styles'
import type { AuthAccentProps } from './types'

export function AuthAccent({ children, ...props }: AuthAccentProps) {
  return <Styled.Accent {...props}>{children}</Styled.Accent>
}

export type { AuthAccentProps } from './types'
