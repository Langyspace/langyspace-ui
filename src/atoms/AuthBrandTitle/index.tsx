import * as Styled from './styles'
import type { AuthBrandTitleProps } from './types'
export function AuthBrandTitle({ children, ...props }: AuthBrandTitleProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { AuthBrandTitleProps } from './types'
