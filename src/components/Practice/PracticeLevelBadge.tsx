import type { PracticeLevelBadgeProps } from './PracticeLevelBadge.types'
import * as Styled from './PracticeLevelBadge.styles'

export function PracticeLevelBadge({
  children,
  ...props
}: PracticeLevelBadgeProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
