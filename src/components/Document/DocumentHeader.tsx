import type { DocumentHeaderProps } from './DocumentHeader.types'
import * as Styled from './DocumentHeader.styles'

export function DocumentHeader({ children, ...props }: DocumentHeaderProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
