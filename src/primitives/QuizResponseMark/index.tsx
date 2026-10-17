import * as Styled from './styles'

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
    <Styled.Mark className={`${className} ${tone}`} aria-hidden="true">
      <QuizMark correct={tone === 'correct'} />
    </Styled.Mark>
  )
}
