import { PracticeProgressBar } from './PracticeProgressBar'
import type { PracticeCardBodyProps } from './PracticeCardBody.types'
import * as Styled from './PracticeCardBody.styles'

export function PracticeCardBody({
  title,
  leadingMeta,
  trailingMeta,
  value,
  completed = false,
}: PracticeCardBodyProps) {
  return (
    <Styled.Body data-ui-practice-card-body="true">
      <Styled.Title $completed={completed}>{title}</Styled.Title>
      <Styled.Meta>
        <span>{leadingMeta}</span>
        <span>{trailingMeta}</span>
      </Styled.Meta>
      <PracticeProgressBar value={value} />
    </Styled.Body>
  )
}
