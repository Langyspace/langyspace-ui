import * as Styled from './styles'
import type { QuizBlankProps } from './types'
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
export type { QuizBlankProps } from './types'
