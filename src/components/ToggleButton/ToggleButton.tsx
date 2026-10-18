import * as Styled from './ToggleButton.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface ToggleButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
}

export function ToggleButton({ type = 'button', ...props }: ToggleButtonProps) {
  return <Styled.Root {...props} type={type} />
}
