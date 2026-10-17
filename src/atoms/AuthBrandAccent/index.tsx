import * as Styled from './styles'
import type { AuthBrandAccentProps } from './types'

export function AuthBrandAccent({ children, ...props }: AuthBrandAccentProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { AuthBrandAccentProps } from './types'
