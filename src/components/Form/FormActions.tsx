import type { FormActionsProps } from './FormActions.types'
import * as Styled from './FormActions.styles'

export function FormActions({ children, ...props }: FormActionsProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
