import type { CardLinkProps } from './CardLink.types'
import * as Styled from './CardLink.styles'

export function CardLink({ children, ...props }: CardLinkProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
