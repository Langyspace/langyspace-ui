import type { QuizBadgeProps } from './QuizBadge.types'
import * as Styled from './QuizBadge.styles'

export function QuizBadge({ children, ...props }: QuizBadgeProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
