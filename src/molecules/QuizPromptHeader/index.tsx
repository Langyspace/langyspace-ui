import * as Styled from './styles'
import type { QuizPromptHeaderProps } from './types'

export function QuizPromptHeader({
  children,
  ...props
}: QuizPromptHeaderProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { QuizPromptHeaderProps } from './types'
