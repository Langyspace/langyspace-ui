import * as Styled from './PracticeCard.styles'
import type { PracticeCardProps } from './PracticeCard.types'

export function PracticeCard({
  completed = false,
  type = 'button',
  ...props
}: PracticeCardProps) {
  return <Styled.Root {...props} type={type} data-completed={completed} />
}
