import type { AuthProgressProps } from './AuthProgress.types'
import * as Styled from './AuthProgress.styles'

export function AuthProgress(props: AuthProgressProps) {
  return <Styled.Progress {...props} aria-hidden="true" />
}
