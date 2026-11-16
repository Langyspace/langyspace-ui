import * as Styled from './RevealCard.styles'
import type { RevealCardProps } from './RevealCard.types'
export function RevealCard({
  marker,
  answer,
  revealed,
  children,
  type = 'button',
  ...props
}: RevealCardProps) {
  return (
    <Styled.Reveal {...props} type={type} aria-expanded={revealed}>
      {marker ? <Styled.Marker>{marker}</Styled.Marker> : null}
      <strong>{children}</strong>
      <span aria-hidden="true">→</span>
      <Styled.Answer>{revealed ? answer : '?'}</Styled.Answer>
    </Styled.Reveal>
  )
}
