import * as Styled from './ChoiceCard.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface ChoiceCardProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
}

export function ChoiceCard({ type = 'button', ...props }: ChoiceCardProps) {
  return <Styled.Root {...props} type={type} />
}
