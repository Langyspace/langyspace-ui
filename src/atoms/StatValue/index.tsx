import * as Styled from './styles'
import type { StatValueProps } from './types'

export function StatValue({ children, ...props }: StatValueProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { StatValueProps } from './types'
