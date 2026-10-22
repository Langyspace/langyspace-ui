import * as Styled from './PracticeCardCover.styles'
import type { PracticeCardCoverProps } from './PracticeCardCover.types'

export function PracticeCardCover({
  children,
  value,
  label,
  ...props
}: PracticeCardCoverProps) {
  return (
    <Styled.Root {...props} data-ui-practice-card-cover>
      {children}
      {(value !== undefined || label !== undefined) && (
        <div>
          <Styled.Value data-ui-practice-cover-value>{value}</Styled.Value>
          <Styled.Label data-ui-practice-cover-label>{label}</Styled.Label>
        </div>
      )}
    </Styled.Root>
  )
}
