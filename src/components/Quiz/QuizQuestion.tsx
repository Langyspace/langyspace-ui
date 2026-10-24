import type { QuizQuestionProps } from './QuizQuestion.types'
import * as Styled from './QuizQuestion.styles'

export function QuizQuestion({ children, ...props }: QuizQuestionProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
