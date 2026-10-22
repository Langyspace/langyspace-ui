import type { QuizBlankProps } from './QuizBlank.types'
import * as Styled from './QuizBlank.styles'

export function QuizBlank(props: QuizBlankProps) {
  const named = Boolean(props['aria-label'])

  return (
    <Styled.Root
      {...props}
      role={named ? 'img' : undefined}
      aria-hidden={named ? undefined : true}
    />
  )
}
