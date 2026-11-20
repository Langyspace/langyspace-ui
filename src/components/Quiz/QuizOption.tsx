import * as Styled from './QuizOption.styles'
import { QuizResponseMark } from '../../internal/QuizResponseMark/QuizResponseMark'
import type { QuizOptionProps } from './QuizOption.types'
import { playFeedbackSound } from '../../internal/feedbackSounds'

export function QuizOption({
  children,
  letter,
  state = 'default',
  density = 'regular',
  type = 'button',
  feedbackOutcome,
  onClick,
  ...props
}: QuizOptionProps) {
  return (
    <Styled.Option
      {...props}
      type={type}
      $state={state}
      $density={density}
      data-ui-quiz-option="true"
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented && feedbackOutcome)
          playFeedbackSound(feedbackOutcome)
      }}
    >
      <Styled.Letter>{letter}</Styled.Letter>
      <Styled.OptionText $state={state}>{children}</Styled.OptionText>
      {state === 'correct' || state === 'wrong' ? (
        <QuizResponseMark tone={state} variant="option" />
      ) : null}
    </Styled.Option>
  )
}
