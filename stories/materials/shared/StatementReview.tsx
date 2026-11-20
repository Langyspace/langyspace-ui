import { useState } from 'react'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import type { StatementReviewProps } from './StatementReview.types'

/** Product adapter: content/evaluation stay here; presentation and navigation have canonical owners. */
export function StatementReview({
  items,
  context,
  labels = { positive: 'Right', negative: 'Wrong' },
}: StatementReviewProps) {
  const [index, setIndex] = useState(0)
  const [attempts, setAttempts] = useState<Record<string, number[]>>({})
  const item = items[index]
  if (!item) return null
  const answer = item.ok ? 0 : 1
  const chosen = attempts[item.id] ?? []
  const done = chosen.includes(answer)
  return (
    <ExercisePanel
      title={item.pre ?? context}
      navigation={{ index, count: items.length, onChange: setIndex }}
    >
      <Common.Surface>
        <Common.Heading $prompt>{item.s}</Common.Heading>
      </Common.Surface>
      {[labels.positive, labels.negative].map((label, i) => (
        <QuizOption
          key={label}
          letter={String.fromCharCode(65 + i)}
          density="compact"
          feedbackOutcome={i === answer ? 'correct' : 'wrong'}
          disabled={done}
          state={
            chosen.includes(i)
              ? i === answer
                ? 'correct'
                : 'wrong'
              : done
                ? 'dim'
                : 'default'
          }
          onClick={() =>
            setAttempts((old) => ({ ...old, [item.id]: [...chosen, i] }))
          }
        >
          {label}
        </QuizOption>
      ))}
      {done ? (
        <Common.Surface>
          {!item.ok && item.a ? <strong>{item.a}</strong> : null}
          <Common.Hint>{item.why}</Common.Hint>
        </Common.Surface>
      ) : null}
    </ExercisePanel>
  )
}
