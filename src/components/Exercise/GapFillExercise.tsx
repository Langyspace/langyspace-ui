import { useId } from 'react'
import { QuizOption } from '../Quiz/QuizOption'
import * as Common from '../Exercise/Material.shared.styles'
import * as Styled from './GapFillExercise.styles'
import type { GapFillExerciseProps } from './GapFillExercise.types'
export function GapFillExercise({
  items,
  activeId,
  choices,
  onSelect,
  optionsVisible = true,
  onOptionsToggle,
  status,
  disabled = false,
  labels,
  ...props
}: GapFillExerciseProps) {
  const id = useId()
  const text = {
    show: 'Show options',
    hide: 'Hide options',
    gap: 'Lacuna',
    empty: 'Nenhuma frase.',
    ...labels,
  }
  return (
    <Styled.Root as="section" {...props}>
      {items.map((item, index) => (
        <Styled.Line key={item.id} $active={activeId === item.id}>
          {item.speaker ? <Common.Tag>{item.speaker}</Common.Tag> : null}
          <p>
            {item.before}
            {item.answer ?? (
              <Styled.Gap
                $active={activeId === item.id}
                aria-label={`${text.gap} ${index + 1}`}
              >
                ___
              </Styled.Gap>
            )}
            {item.after}
          </p>
          {activeId === item.id ? (
            <>
              {onOptionsToggle ? (
                <Common.Action
                  type="button"
                  variant="secondary"
                  aria-expanded={optionsVisible}
                  aria-controls={id}
                  onClick={onOptionsToggle}
                >
                  {optionsVisible ? text.hide : text.show}
                </Common.Action>
              ) : null}
              {optionsVisible ? (
                <Common.Stack id={id}>
                  {choices.map((choice, i) => (
                    <QuizOption
                      key={choice.id}
                      letter={String.fromCharCode(65 + i)}
                      density="compact"
                      state={choice.state}
                      disabled={disabled || choice.disabled}
                      onClick={() => {
                        onSelect(item.id, choice.id)
                      }}
                    >
                      {choice.label}
                    </QuizOption>
                  ))}
                </Common.Stack>
              ) : null}
            </>
          ) : null}
        </Styled.Line>
      ))}
      {!items.length ? <Common.Hint>{text.empty}</Common.Hint> : null}
      {status ? <Common.Hint role="status">{status}</Common.Hint> : null}
    </Styled.Root>
  )
}
