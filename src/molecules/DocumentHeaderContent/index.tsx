import * as Styled from './styles'
import type { DocumentHeaderContentProps } from './types'

export function DocumentHeaderContent({
  children,
  ...props
}: DocumentHeaderContentProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { DocumentHeaderContentProps } from './types'
