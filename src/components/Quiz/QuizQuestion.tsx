import type { QuizQuestionProps } from './QuizQuestion.types'
import * as Styled from './QuizQuestion.styles'

export function QuizQuestion({
  children,
  context,
  density = 'regular',
  tone = 'default',
  ...props
}: QuizQuestionProps) {
  return (
    <Styled.Root
      {...props}
      $compact={density === 'compact'}
      $material={tone === 'material'}
    >
      {context ? <Styled.Context>{context}</Styled.Context> : null}
      {children}
    </Styled.Root>
  )
}
