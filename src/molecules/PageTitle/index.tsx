import * as Styled from './styles'
import type { PageTitleProps } from './types'
export function PageTitle({ children, ...props }: PageTitleProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { PageTitleProps } from './types'
