import { useId, useState } from 'react'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { QuizQuestion } from '../../../src/components/Quiz/QuizQuestion'
import { QuizPromptHeader } from '../../../src/components/Quiz/QuizPromptHeader'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import type { StatementReviewProps } from './StatementReview.types'

/** Content and evaluation stay in the adapter; layout, choices and feedback use library owners. */
export function StatementReview({
  items,
  context,
  labels = { positive: 'Right', negative: 'Wrong' },
}: StatementReviewProps) {
  const prefix = useId()
  const [expandedId, setExpandedId] = useState<string>()
  const [attempts, setAttempts] = useState<Record<string, number[]>>({})
  if (!items.length) return null
  return (
    <ExercisePanel title={context}>
      {items.map((item, index) => {
        const answer = item.ok ? 0 : 1
        const chosen = attempts[item.id] ?? []
        const done = chosen.includes(answer)
        const expanded = done && expandedId === item.id
        const promptId = `${prefix}-${index}-prompt`
        const detailId = `${prefix}-${index}-explanation`
        return (
          <Common.Stack key={item.id}>
            {item.pre ? <Common.Hint>{item.pre}</Common.Hint> : null}
            <QuizPromptHeader>
              <QuizQuestion id={promptId} density="compact" tone="material">
                {index + 1}. {item.s}
              </QuizQuestion>
              <Common.Row role="group" aria-labelledby={promptId}>
                {[labels.positive, labels.negative].map((label, i) => (
                  <QuizOption
                    key={label}
                    letter={null}
                    density="compact"
                    layout="inline"
                    feedbackOutcome={
                      done ? undefined : i === answer ? 'correct' : 'wrong'
                    }
                    disabled={done && i !== answer}
                    aria-expanded={done && i === answer ? expanded : undefined}
                    aria-controls={
                      expanded && i === answer ? detailId : undefined
                    }
                    state={
                      chosen.includes(i)
                        ? i === answer
                          ? 'correct'
                          : 'wrong'
                        : done
                          ? 'dim'
                          : 'default'
                    }
                    onClick={() => {
                      if (done) {
                        setExpandedId(expanded ? undefined : item.id)
                        return
                      }
                      setAttempts((old) => ({
                        ...old,
                        [item.id]: [...(old[item.id] ?? []), i],
                      }))
                      if (i === answer) setExpandedId(item.id)
                      else setExpandedId(undefined)
                    }}
                  >
                    {label}
                  </QuizOption>
                ))}
              </Common.Row>
            </QuizPromptHeader>
            {expanded ? (
              <Common.Stack id={detailId} role="status">
                {!item.ok && item.a ? (
                  <Common.Paragraph>
                    <strong>{item.a}</strong>
                  </Common.Paragraph>
                ) : null}
                <Common.Hint>{item.why}</Common.Hint>
              </Common.Stack>
            ) : null}
          </Common.Stack>
        )
      })}
    </ExercisePanel>
  )
}
