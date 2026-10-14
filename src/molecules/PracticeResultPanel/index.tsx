import * as Styled from './styles'
import type { PracticeResultPanelProps } from './types'

export function PracticeResultPanel({
  title,
  description,
  children,
  actions,
}: PracticeResultPanelProps) {
  return (
    <Styled.Panel data-ui-practice-result-panel="true">
      <Styled.CompletionMark aria-hidden="true">
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
      </Styled.CompletionMark>
      <Styled.Title>{title}</Styled.Title>
      <p>{description}</p>
      {children}
      <Styled.Actions>{actions}</Styled.Actions>
    </Styled.Panel>
  )
}

export type { PracticeResultPanelProps } from './types'
