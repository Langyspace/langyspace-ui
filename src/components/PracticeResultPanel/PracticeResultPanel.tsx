import * as Styled from './PracticeResultPanel.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface PracticeResultPanelProps extends ComponentPropsWithRef<'div'> {
  children?: ReactNode
  /** Heading content; native title remains the HTML tooltip. */
  heading?: ReactNode
  description?: ReactNode
  actions?: ReactNode
  /** null suppresses the default completion mark. */
  icon?: ReactNode
}

export function PracticeResultPanel({
  children,
  heading,
  description,
  actions,
  icon,
  ...props
}: PracticeResultPanelProps) {
  const showHeading = heading != null && heading !== false
  const showDescription = description != null && description !== false
  const showActions = actions != null && actions !== false
  const hasContent =
    showHeading || showDescription || showActions || icon !== undefined

  return (
    <Styled.Panel {...props} data-ui-practice-result-panel="true">
      {hasContent && (
        <>
          {icon === undefined ? <ResultMark /> : icon}
          {showHeading && <Styled.Title>{heading}</Styled.Title>}
          {showDescription && (
            <Styled.Description>{description}</Styled.Description>
          )}
        </>
      )}
      {children}
      {showActions && <Styled.Actions>{actions}</Styled.Actions>}
    </Styled.Panel>
  )
}

type ResultMarkProps = Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'aria-hidden'
>

// The legacy named mark and the composed panel share this decorative graphic.
export function ResultMark(props: ResultMarkProps) {
  return (
    <Styled.Mark {...props} aria-hidden="true">
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m20 6-11 11-5-5" />
      </svg>
    </Styled.Mark>
  )
}
