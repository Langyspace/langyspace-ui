import type { QuizQuestionProps } from './QuizQuestion.types'
import * as Styled from './QuizQuestion.styles'

export function QuizQuestion({
  children,
  context,
  action,
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
      {action ? (
        <Styled.PromptLine>
          <Styled.PromptText>{children}</Styled.PromptText>
          <Styled.Action>{action}</Styled.Action>
        </Styled.PromptLine>
      ) : (
        children
      )}
    </Styled.Root>
  )
}
