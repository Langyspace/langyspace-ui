import * as Styled from './styles'
import type { PracticeResultMarkProps } from './types'

export function PracticeResultMark(props: PracticeResultMarkProps) {
  return (
    <Styled.CompletionMark {...props} aria-hidden="true">
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
  )
}

export type { PracticeResultMarkProps } from './types'
