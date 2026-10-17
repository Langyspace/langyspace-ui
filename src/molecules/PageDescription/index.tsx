import * as Styled from './styles'
import type { PageDescriptionProps } from './types'

export function PageDescription({ children, ...props }: PageDescriptionProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { PageDescriptionProps } from './types'
