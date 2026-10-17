import * as Styled from './styles'
import type { BrandLinkProps } from './types'

export function BrandLink({ children, ...props }: BrandLinkProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { BrandLinkProps } from './types'
