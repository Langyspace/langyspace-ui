import * as Styled from './styles'
import type { QuizBadgeProps } from './types'
export function QuizBadge({ children, ...props }: QuizBadgeProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { QuizBadgeProps } from './types'
