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
  answerMinLines = 1,
  guidance,
  onClick,
  ...props
}: RevealCardProps) {
  const answerId = useId()
  if (guidance) {
    const next =
      guidance.level === 'cue'
        ? 'hint'
        : guidance.level === 'hint'
          ? 'full'
          : 'cue'
    const label =
      guidance.level === 'cue'
        ? (guidance.labels?.hint ?? 'Hint')
        : guidance.level === 'hint'
          ? (guidance.labels?.answer ?? 'Answer')
          : (guidance.labels?.hide ?? 'Hide')
    return (
      <Styled.PromptPanel>
        <Styled.GuidedQuestion id={`${answerId}-question`}>
          {children}
        </Styled.GuidedQuestion>
        <Styled.GuidanceButton
          {...props}
          type={type}
          aria-label={label}
          aria-describedby={`${answerId}-question`}
          aria-controls={answerId}
          aria-expanded={guidance.level !== 'cue'}
          onClick={(event) => {
            onClick?.(event)
            if (!event.defaultPrevented) guidance.onChange(next)
          }}
        >
          {label}
        </Styled.GuidanceButton>
        <Styled.GuidanceContent id={answerId} aria-live="polite">
          <Styled.PromptAnswer
            $revealed={guidance.level === 'hint'}
            $minLines={answerMinLines}
            aria-hidden={guidance.level !== 'hint'}
            inert={guidance.level !== 'hint'}
          >
            {guidance.hint}
          </Styled.PromptAnswer>
          <Styled.PromptAnswer
            $revealed={guidance.level === 'full'}
            $minLines={answerMinLines}
            aria-hidden={guidance.level !== 'full'}
            inert={guidance.level !== 'full'}
          >
            {answer}
          </Styled.PromptAnswer>
        </Styled.GuidanceContent>
      </Styled.PromptPanel>
    )
  }
  if (presentation === 'prompt')
    return (
      <Styled.PromptPanel>
        <Styled.PromptTrigger
          {...props}
          onClick={onClick}
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
        <Styled.PromptAnswer
          id={answerId}
          $revealed={revealed}
          $minLines={answerMinLines}
          aria-hidden={!revealed}
          inert={!revealed}
        >
          {answer}
        </Styled.PromptAnswer>
      </Styled.PromptPanel>
    )
  return (
    <Styled.Reveal
      {...props}
      onClick={onClick}
      type={type}
      aria-expanded={revealed}
    >
      {marker ? <Styled.Marker>{marker}</Styled.Marker> : null}
      <strong>{children}</strong>
      <span aria-hidden="true">→</span>
      <Styled.Answer>{revealed ? answer : '?'}</Styled.Answer>
    </Styled.Reveal>
  )
}
