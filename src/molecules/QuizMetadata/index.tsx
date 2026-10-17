import * as Styled from './styles'
import type { QuizMetadataProps } from './types'

export function QuizMetadata({ children, ...props }: QuizMetadataProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { QuizMetadataProps } from './types'
