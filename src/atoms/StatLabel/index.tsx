import * as Styled from './styles'
import type { StatLabelProps } from './types'

export function StatLabel({ children, ...props }: StatLabelProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { StatLabelProps } from './types'
