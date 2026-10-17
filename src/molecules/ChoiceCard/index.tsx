import * as Styled from './styles'
import type { ChoiceCardProps } from './types'

export function ChoiceCard({ type = 'button', ...props }: ChoiceCardProps) {
  return <Styled.Root {...props} type={type} />
}

export type { ChoiceCardProps } from './types'
