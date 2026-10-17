import * as Styled from './styles'
import { QuizResponseMark } from '../../primitives/QuizResponseMark'
import type { QuizOptionProps } from './types'

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
      <Styled.Letter className="letter">{letter}</Styled.Letter>
      <span className="optionText">{children}</span>
      {state === 'correct' || state === 'wrong' ? (
        <QuizResponseMark className="mark" tone={state} />
      ) : null}
    </Styled.Option>
  )
}

export type { QuizOptionProps, QuizOptionState } from './types'
