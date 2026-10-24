import * as Styled from './QuizOption.styles'
import { QuizResponseMark } from '../../internal/QuizResponseMark/QuizResponseMark'
import type { QuizOptionProps } from './QuizOption.types'

export function QuizOption({
  children,
  letter,
  state = 'default',
  type = 'button',
  ...props
}: QuizOptionProps) {
  return (
    <Styled.Option
      {...props}
      type={type}
      $state={state}
      data-ui-quiz-option="true"
    >
      <Styled.Letter>{letter}</Styled.Letter>
      <Styled.OptionText $state={state}>{children}</Styled.OptionText>
      {state === 'correct' || state === 'wrong' ? (
        <QuizResponseMark tone={state} variant="option" />
      ) : null}
    </Styled.Option>
  )
}
