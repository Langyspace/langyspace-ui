import type { BrandLinkProps } from './BrandLink.types'
import * as Styled from './BrandLink.styles'

export function BrandLink({ children, ...props }: BrandLinkProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
