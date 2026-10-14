import * as Styled from './styles'
import type { AuthProgressProps } from './types'

export function AuthProgress(props: AuthProgressProps) {
  return <Styled.Progress {...props} aria-hidden="true"></Styled.Progress>
}

export type { AuthProgressProps } from './types'
