import * as Styled from './styles'
import type { AuthSuccessIconProps } from './types'

export function AuthSuccessIcon(props: AuthSuccessIconProps) {
  return (
    <Styled.Icon {...props} aria-hidden="true">
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
  )
}

export type { AuthSuccessIconProps } from './types'
