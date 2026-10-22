import type { PageTitleProps } from './PageTitle.types'
import * as Styled from './PageTitle.styles'

export function PageTitle({ children, ...props }: PageTitleProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
