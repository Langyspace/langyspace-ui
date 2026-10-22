import * as Styled from './ChoiceCard.styles'
import type { ChoiceCardProps } from './ChoiceCard.types'

export function ChoiceCard({ type = 'button', ...props }: ChoiceCardProps) {
  return <Styled.Root {...props} type={type} />
}
