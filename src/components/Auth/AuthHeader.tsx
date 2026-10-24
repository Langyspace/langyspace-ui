import type { ReactNode } from 'react'
import * as Styled from './AuthHeader.styles'
import type { AuthHeaderProps } from './AuthHeader.types'

const noParagraphs: readonly ReactNode[] = []

export function AuthHeader({
  title,
  highlight,
  paragraphs = noParagraphs,
  backAction,
  ...headingProps
}: AuthHeaderProps) {
  return (
    <>
      {backAction != null && (
        <Styled.BackAction>{backAction}</Styled.BackAction>
      )}
      <Styled.Title {...headingProps}>
        {title}
        {highlight != null && <Styled.Accent>{highlight}</Styled.Accent>}
      </Styled.Title>
      {paragraphs.map((paragraph, index) => (
        // Paragraphs are static copy rendered in their given order.
        // eslint-disable-next-line @eslint-react/no-array-index-key
        <Styled.Description key={index}>{paragraph}</Styled.Description>
      ))}
    </>
  )
}
