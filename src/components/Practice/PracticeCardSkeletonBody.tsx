import * as Styled from './PracticeCardSkeletonBody.styles'

import type { ComponentPropsWithRef } from 'react'

export type PracticeCardSkeletonBodyProps = Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'aria-hidden' | 'role' | 'tabIndex'
>

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
