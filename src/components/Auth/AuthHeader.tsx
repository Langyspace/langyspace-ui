import type { ComponentPropsWithRef, ReactNode } from 'react'
import * as Styled from './AuthHeader.styles'

export interface AuthHeaderProps extends Omit<
  ComponentPropsWithRef<'h2'>,
  'title' | 'children'
> {
  title: ReactNode
  highlight?: ReactNode
  paragraphs?: readonly ReactNode[]
  backAction?: ReactNode
}

export function AuthHeader({
  title,
  highlight,
  paragraphs = [],
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
        <Styled.Description key={index}>{paragraph}</Styled.Description>
      ))}
    </>
  )
}
