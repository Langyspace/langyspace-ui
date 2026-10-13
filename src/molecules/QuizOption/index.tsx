import * as Styled from './styles'
import { QuizMark } from './mark'
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
        <Styled.Mark className={`mark ${state}`} aria-hidden="true">
          <QuizMark correct={state === 'correct'} />
        </Styled.Mark>
      ) : null}
    </Styled.Option>
  )
}
export type { QuizOptionProps, QuizOptionState } from './types'
