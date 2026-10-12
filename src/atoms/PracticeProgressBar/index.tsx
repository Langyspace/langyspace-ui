import * as Styled from './styles'
import type { PracticeProgressBarProps } from './types'

export function PracticeProgressBar({
  value,
  ...props
}: PracticeProgressBarProps) {
  const progress = Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 0

  return (
    <Styled.Track
      {...props}
      aria-hidden="true"
      data-ui-practice-progress-bar="true"
    >
      <Styled.Fill style={{ width: `${progress * 100}%` }} />
    </Styled.Track>
  )
}

export type { PracticeProgressBarProps } from './types'
