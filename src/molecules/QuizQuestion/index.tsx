import * as Styled from './styles'
import type { QuizQuestionProps } from './types'
export function QuizQuestion({ children, ...props }: QuizQuestionProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { QuizQuestionProps } from './types'
