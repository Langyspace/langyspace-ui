import { styled } from 'styled-components'
import { quizRecipe } from '../../foundations/quizRecipe'

const Mark = styled.span`
  width: 1.375rem;
  height: 1.375rem;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${quizRecipe.radius.circle};
  color: ${quizRecipe.colors.text.inverse};

  &.correct {
    background: #16a34a;
  }

  &.wrong {
    background: #dc2626;
  }
`

export function QuizMark({ correct }: { correct: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {correct ? (
        <path d="m20 6-11 11-5-5" />
      ) : (
        <>
          <path d="m18 6-12 12" />
          <path d="m6 6 12 12" />
        </>
      )}
    </svg>
  )
}

export function QuizResponseMark({
  className = '',
  tone,
}: {
  className?: string
  tone: 'correct' | 'wrong'
}) {
  return (
    <Mark className={`${className} ${tone}`} aria-hidden="true">
      <QuizMark correct={tone === 'correct'} />
    </Mark>
  )
}
