import * as Styled from './PracticeCard.styles'

import type { ComponentPropsWithRef } from 'react'

export interface PracticeCardProps extends ComponentPropsWithRef<'button'> {
  completed?: boolean
}

export function PracticeCard({
  completed = false,
  type = 'button',
  ...props
}: PracticeCardProps) {
  return <Styled.Root {...props} type={type} data-completed={completed} />
}
