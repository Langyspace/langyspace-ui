import { EMPTY_LIST } from './Material.constants'
import * as Common from './Material.shared.styles'
import * as Styled from './OralReview.styles'
import type { OralReviewProps } from './OralReview.types'
export function OralReview({
  questions,
  ratings,
  onRate,
  revealedIds = EMPTY_LIST,
  onReveal,
  disabled = false,
  labels,
  ...props
}: OralReviewProps) {
  const text = {
    show: 'Mostrar exemplo',
    hide: 'Esconder exemplo',
    rating: 'estrelas',
    empty: 'Nenhuma pergunta.',
    ...labels,
  }
  return (
    <Styled.Root as="section" {...props}>
      {questions.map((question, i) => (
        <Styled.Card key={question.id}>
          <Common.Tag>
            {i + 1} · {question.level}
          </Common.Tag>
          <div>{question.prompt}</div>
          <Common.Row
            role="group"
            aria-label={`${text.rating}: ${question.id}`}
          >
            {([1, 2, 3] as const).map((stars) => (
              <Styled.Star
                key={stars}
                type="button"
                $selected={(ratings[question.id] ?? 0) >= stars}
                aria-pressed={ratings[question.id] === stars}
                disabled={disabled}
                aria-label={`${stars} ${text.rating}: ${question.id}`}
                onClick={() => {
                  onRate(question.id, stars)
                }}
              >
                <span aria-hidden="true">★</span>
              </Styled.Star>
            ))}
          </Common.Row>
          {question.example && onReveal ? (
            <Common.Action
              type="button"
              variant="text"
              aria-expanded={revealedIds.includes(question.id)}
              onClick={() => {
                onReveal(question.id)
              }}
            >
              {revealedIds.includes(question.id) ? text.hide : text.show}
            </Common.Action>
          ) : null}
          {revealedIds.includes(question.id) ? (
            <Common.Hint>{question.example}</Common.Hint>
          ) : null}
        </Styled.Card>
      ))}
      {!questions.length ? <Common.Hint>{text.empty}</Common.Hint> : null}
    </Styled.Root>
  )
}
