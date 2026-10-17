import * as Styled from './styles'
import type { PracticeResultActionsProps } from './types'

export function PracticeResultActions({
  children,
  ...props
}: PracticeResultActionsProps) {
  return <Styled.Actions {...props}>{children}</Styled.Actions>
}

export type { PracticeResultActionsProps } from './types'
