import * as Styled from './styles'
import type { AuthBackButtonProps } from './types'
export function AuthBackButton(props: AuthBackButtonProps) {
  return <Styled.Button {...props} size="sm" variant="secondary" />
}
export type { AuthBackButtonProps } from './types'
