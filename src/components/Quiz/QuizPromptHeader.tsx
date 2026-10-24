import type { QuizPromptHeaderProps } from './QuizPromptHeader.types'
import * as Styled from './QuizPromptHeader.styles'

export function QuizPromptHeader({
  children,
  ...props
}: QuizPromptHeaderProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
