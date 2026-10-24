import type { QuizMetadataProps } from './QuizMetadata.types'
import * as Styled from './QuizMetadata.styles'

export function QuizMetadata({ children, ...props }: QuizMetadataProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
