import type { AuthEyebrowProps } from './AuthEyebrow.types'
import * as Styled from './AuthEyebrow.styles'

export function AuthEyebrow({ children, ...props }: AuthEyebrowProps) {
  return <Styled.Eyebrow {...props}>{children}</Styled.Eyebrow>
}
