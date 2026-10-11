import * as Styled from './styles'
import type { CardProps } from './types'

export function Card(props: CardProps) {
  return <Styled.Container {...props} data-ui-card="true" />
}

export type { CardProps } from './types'
