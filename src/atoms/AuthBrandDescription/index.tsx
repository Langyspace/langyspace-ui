import * as Styled from './styles'
import type { AuthBrandDescriptionProps } from './types'
export function AuthBrandDescription({
  children,
  ...props
}: AuthBrandDescriptionProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { AuthBrandDescriptionProps } from './types'
