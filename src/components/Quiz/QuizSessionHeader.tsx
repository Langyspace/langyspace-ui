import { PracticeProgressBar } from '../Practice/PracticeProgressBar'
import * as Styled from './QuizSessionHeader.styles'

export interface QuizSessionHeaderProps {
  /** Consumer-owned session name and question/result counter. */
  name: string
  counter: string
  /** Consumer-owned progress in the 0–1 range. */
  progress: number
  /** Accessible name and action for returning to the owning screen. */
  backLabel: string
  onBack: () => void
}

export function QuizSessionHeader({
  name,
  counter,
  progress,
  backLabel,
  onBack,
}: QuizSessionHeaderProps) {
  return (
    <Styled.Header data-ui-quiz-session-header="true">
      <Styled.BackButton aria-label={backLabel} onClick={onBack} type="button">
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </Styled.BackButton>
      <Styled.ProgressArea>
        <Styled.Label>
          <Styled.Name>{name}</Styled.Name>
          <span>{counter}</span>
        </Styled.Label>
        <PracticeProgressBar value={progress} />
      </Styled.ProgressArea>
    </Styled.Header>
  )
}
