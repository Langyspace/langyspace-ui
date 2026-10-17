import * as Styled from './styles'
import type { PracticeLevelBadgeProps } from './types'

export function PracticeLevelBadge({
  children,
  ...props
}: PracticeLevelBadgeProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { PracticeLevelBadgeProps } from './types'
