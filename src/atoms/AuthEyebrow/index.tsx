import * as Styled from './styles'
import type { AuthEyebrowProps } from './types'

export function AuthEyebrow({ children, ...props }: AuthEyebrowProps) {
  return <Styled.Eyebrow {...props}>{children}</Styled.Eyebrow>
}

export type { AuthEyebrowProps } from './types'
