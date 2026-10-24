import * as Styled from './QuizResponseMark.styles'
import type {
  QuizMarkProps,
  QuizResponseMarkProps,
} from './QuizResponseMark.types'

export function QuizMark({ correct }: QuizMarkProps) {
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
  tone,
  variant = 'feedback',
}: QuizResponseMarkProps) {
  return (
    <Styled.Mark $tone={tone} $variant={variant} aria-hidden="true">
      <QuizMark correct={tone === 'correct'} />
    </Styled.Mark>
  )
}
