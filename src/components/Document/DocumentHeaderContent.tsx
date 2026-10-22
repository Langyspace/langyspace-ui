import type { DocumentHeaderContentProps } from './DocumentHeaderContent.types'
import * as Styled from './DocumentHeaderContent.styles'

export function DocumentHeaderContent({
  children,
  ...props
}: DocumentHeaderContentProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
