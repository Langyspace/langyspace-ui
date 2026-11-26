import { useState } from 'react'
import { RevealCard } from './RevealCard'
import { VocabularyControls } from './VocabularyControls'
import type { QuestionListProps } from './QuestionList.types'
import type { RevealGuidanceLevel } from './RevealCard.types'
import * as S from './PromptList.styles'

/** Factual questions stay visible; answers are independent and language hints progress in order. */
export function QuestionList({
  items,
  numbered = true,
  density = 'regular',
  answerMinLines,
  labels,
  ...props
}: QuestionListProps) {
  const [hintCount, setHintCount] = useState(0)
  const [levels, setLevels] = useState<
    Readonly<Record<string, RevealGuidanceLevel>>
  >({})
  const hints = items.filter((item) => item.hint)
  return (
    <S.Root
      {...props}
      $compact={density === 'compact'}
      data-question-list="true"
    >
      <S.PromptList>
        {items.map((item, index) => {
          const marker = numbered ? (
            <S.Number aria-hidden="true">{index + 1}</S.Number>
          ) : undefined
          const level = levels[item.id] ?? 'cue'
          return (
            <S.Prompt
              key={item.id}
              $numbered={numbered}
              $compact={density === 'compact'}
            >
              {item.answer || item.hint ? (
                <RevealCard
                  presentation="prompt"
                  marker={marker}
                  answer={item.answer || item.hint}
                  answerMinLines={answerMinLines}
                  revealed={level === 'full'}
                  aria-label={item.prompt}
                  guidanceControl="external"
                  guidance={{
                    level,
                    hint: item.hint,
                    onChange: (next) =>
                      setLevels((old) => ({
                        ...old,
                        [item.id]: item.answer
                          ? next
                          : level === 'cue'
                            ? 'hint'
                            : 'cue',
                      })),
                  }}
                >
                  {item.prompt}
                </RevealCard>
              ) : (
                <S.PromptQuestion>
                  {marker}
                  <p>{item.prompt}</p>
                </S.PromptQuestion>
              )}
              {item.cue ? (
                <S.Guidance $numbered={numbered}>{item.cue}</S.Guidance>
              ) : null}
            </S.Prompt>
          )
        })}
      </S.PromptList>
      {hints.length ? (
        <S.Footer data-question-hint-footer="true">
          <VocabularyControls
            density="compact"
            interaction="progressive"
            showInitial={hintCount > 0}
            labels={{
              hint:
                hintCount === hints.length
                  ? (labels?.hideHints ?? 'Hide hints')
                  : (labels?.hint ?? 'Show next hint'),
            }}
            onToggleInitial={() => {
              if (hintCount === hints.length) {
                setHintCount(0)
                setLevels((old) =>
                  Object.fromEntries(
                    Object.entries(old).map(([id, value]) => [
                      id,
                      value === 'hint' ? 'cue' : value,
                    ]),
                  ),
                )
              } else {
                const next = hints[hintCount]!
                setHintCount(hintCount + 1)
                setLevels((old) => ({ ...old, [next.id]: 'hint' }))
              }
            }}
          />
        </S.Footer>
      ) : null}
    </S.Root>
  )
}
