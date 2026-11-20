import type { QuizQuestionProps } from './QuizQuestion.types'
import * as Styled from './QuizQuestion.styles'

export function QuizQuestion({
  children,
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
      {children}
    </Styled.Root>
  )
}
