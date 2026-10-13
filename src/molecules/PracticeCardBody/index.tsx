import { PracticeProgressBar } from '../../atoms/PracticeProgressBar'
import * as Styled from './styles'
import type { PracticeCardBodyProps } from './types'

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
      <Styled.Meta $completed={completed}>
        <span>{leadingMeta}</span>
        <span>{trailingMeta}</span>
      </Styled.Meta>
      <PracticeProgressBar value={value} />
    </Styled.Body>
  )
}

export type { PracticeCardBodyProps } from './types'
