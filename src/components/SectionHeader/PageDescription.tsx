import type { PageDescriptionProps } from './PageDescription.types'
import * as Styled from './PageDescription.styles'

export function PageDescription({ children, ...props }: PageDescriptionProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
