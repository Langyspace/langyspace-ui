import * as Styled from './styles'
import type { DocumentNavigationProps } from './types'
export function DocumentNavigation({
  children,
  ...props
}: DocumentNavigationProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { DocumentNavigationProps } from './types'
