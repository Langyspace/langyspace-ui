import * as Styled from './QuizOption.styles'
import { QuizResponseMark } from '../../internal/QuizResponseMark/QuizResponseMark'
import type { QuizOptionProps } from './QuizOption.types'
import { playFeedbackSound } from '../../internal/feedbackSounds'

export function QuizOption({
  children,
  letter,
  state = 'default',
  density = 'regular',
  layout = 'block',
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
      $layout={layout}
      data-ui-quiz-option="true"
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented && feedbackOutcome)
          playFeedbackSound(feedbackOutcome)
      }}
    >
      {letter != null ? <Styled.Letter>{letter}</Styled.Letter> : null}
      <Styled.OptionText $state={state}>{children}</Styled.OptionText>
      {layout === 'inline' ? (
        <Styled.InlineResult>
          {state === 'correct' || state === 'wrong' ? (
            <QuizResponseMark tone={state} variant="option" />
          ) : null}
        </Styled.InlineResult>
      ) : state === 'correct' || state === 'wrong' ? (
        <QuizResponseMark tone={state} variant="option" />
      ) : null}
    </Styled.Option>
  )
}
