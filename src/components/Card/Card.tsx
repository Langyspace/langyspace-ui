import type { CardProps } from './Card.types'
import * as Styled from './Card.styles'

export function Card(props: CardProps) {
  return <Styled.Container {...props} data-ui-card="true" />
}
