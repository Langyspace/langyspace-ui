import { QuizMark } from '../QuizOption/mark'
import { Mark } from '../QuizOption/styles'
import * as Styled from './styles'
import type { QuizFeedbackProps } from './types'
export function QuizFeedback({ children, tone, ...props }: QuizFeedbackProps) {
  return (
    <Styled.Feedback
      {...props}
      $correct={tone === 'correct'}
      data-ui-quiz-feedback="true"
    >
      <Mark className={tone} aria-hidden="true">
        <QuizMark correct={tone === 'correct'} />
      </Mark>
      {children}
    </Styled.Feedback>
  )
}
export type { QuizFeedbackProps } from './types'
