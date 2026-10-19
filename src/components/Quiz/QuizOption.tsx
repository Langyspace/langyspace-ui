import * as Styled from './QuizOption.styles'
import { QuizResponseMark } from '../../internal/QuizResponseMark/QuizResponseMark'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export type QuizOptionState = 'default' | 'correct' | 'wrong' | 'dim'

export type QuizOptionProps = ComponentPropsWithRef<'button'> & {
  letter: ReactNode
  state?: QuizOptionState
}

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
