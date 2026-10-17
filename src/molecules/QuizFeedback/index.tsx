import { QuizResponseMark } from '../../primitives/QuizResponseMark'
import * as Styled from './styles'
import type { QuizFeedbackProps } from './types'

export function QuizFeedback({ children, tone, ...props }: QuizFeedbackProps) {
  return (
    <Styled.Feedback
      {...props}
      $correct={tone === 'correct'}
      data-ui-quiz-feedback="true"
    >
      <QuizResponseMark tone={tone} />
      {children}
    </Styled.Feedback>
  )
}

export type { QuizFeedbackProps } from './types'
