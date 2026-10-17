import * as Styled from './styles'
import type { PracticeCardProps } from './types'

export function PracticeCard({
  completed = false,
  type = 'button',
  ...props
}: PracticeCardProps) {
  return <Styled.Root {...props} type={type} data-completed={completed} />
}

export type { PracticeCardProps } from './types'
