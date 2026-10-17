import * as Styled from './styles'
import type { FormActionsProps } from './types'

export function FormActions({ children, ...props }: FormActionsProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { FormActionsProps } from './types'
