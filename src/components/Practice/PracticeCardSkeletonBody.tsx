import * as Styled from './PracticeCardSkeletonBody.styles'
import type { PracticeCardSkeletonBodyProps } from './PracticeCardSkeletonBody.types'

export function PracticeCardSkeletonBody(props: PracticeCardSkeletonBodyProps) {
  return (
    <Styled.Body
      {...props}
      aria-hidden="true"
      data-ui-practice-card-skeleton-body="true"
    >
      <Styled.Line />
      <Styled.Meta>
        <Styled.Line />
        <Styled.Line />
      </Styled.Meta>
      <Styled.Line />
    </Styled.Body>
  )
}
