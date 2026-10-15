import * as Styled from './styles'
import type { CardLinkProps } from './types'
export function CardLink({ children, ...props }: CardLinkProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { CardLinkProps } from './types'
