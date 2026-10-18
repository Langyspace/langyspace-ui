import * as Styled from './NavigationButton.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface NavigationButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
}

export function NavigationButton({
  type = 'button',
  ...props
}: NavigationButtonProps) {
  return <Styled.Root {...props} type={type} />
}
