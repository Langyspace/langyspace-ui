import type { DocumentNavigationProps } from './DocumentNavigation.types'
import * as Styled from './DocumentNavigation.styles'

export function DocumentNavigation({
  children,
  ...props
}: DocumentNavigationProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
