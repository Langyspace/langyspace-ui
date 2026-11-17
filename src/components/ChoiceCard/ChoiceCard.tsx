import * as Styled from './ChoiceCard.styles'
import type { ChoiceCardProps } from './ChoiceCard.types'

export function ChoiceCard({
  type = 'button',
  variant = 'default',
  ...props
}: ChoiceCardProps) {
  return <Styled.Root {...props} type={type} $lesson={variant === 'lesson'} />
}
