import { QuizResponseMark } from '../../internal/QuizResponseMark/QuizResponseMark'
import type { QuizFeedbackProps } from './QuizFeedback.types'
import * as Styled from './QuizFeedback.styles'

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
