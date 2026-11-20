import { useId } from 'react'
import * as Styled from './RevealCard.styles'
import type { RevealCardProps } from './RevealCard.types'
export function RevealCard({
  marker,
  answer,
  revealed,
  children,
  type = 'button',
  presentation = 'card',
  ...props
}: RevealCardProps) {
  const answerId = useId()
  if (presentation === 'prompt')
    return (
      <Styled.PromptPanel>
        <Styled.PromptTrigger
          {...props}
          type={type}
          aria-expanded={revealed}
          aria-controls={answerId}
        >
          {typeof marker === 'string' || typeof marker === 'number' ? (
            <Styled.Marker>{marker}</Styled.Marker>
          ) : (
            marker
          )}
          <span>{children}</span>
        </Styled.PromptTrigger>
        <Styled.PromptAnswer id={answerId} hidden={!revealed}>
          {answer}
        </Styled.PromptAnswer>
      </Styled.PromptPanel>
    )
  return (
    <Styled.Reveal {...props} type={type} aria-expanded={revealed}>
      {marker ? <Styled.Marker>{marker}</Styled.Marker> : null}
      <strong>{children}</strong>
      <span aria-hidden="true">→</span>
      <Styled.Answer>{revealed ? answer : '?'}</Styled.Answer>
    </Styled.Reveal>
  )
}
