import * as Styled from './styles'
import type { DocumentHeaderProps } from './types'
export function DocumentHeader({ children, ...props }: DocumentHeaderProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { DocumentHeaderProps } from './types'
