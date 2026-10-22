import type { AuthSuccessStateProps } from './AuthSuccessState.types'
import * as Styled from './AuthSuccessState.styles'

export function AuthSuccessState({
  children,
  ...props
}: AuthSuccessStateProps) {
  return (
    <Styled.Container {...props}>
      {' '}
      <Styled.Icon aria-hidden="true">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m20 6-11 11-5-5" />
        </svg>
      </Styled.Icon>
      {children}
    </Styled.Container>
  )
}
