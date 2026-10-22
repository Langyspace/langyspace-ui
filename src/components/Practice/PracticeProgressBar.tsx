import type { PracticeProgressBarProps } from './PracticeProgressBar.types'
import * as Styled from './PracticeProgressBar.styles'

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
      <Styled.Fill $progress={progress} />
    </Styled.Track>
  )
}
