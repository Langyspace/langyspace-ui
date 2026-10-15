import * as Styled from './styles'
import type { PracticeCoverValueProps } from './types'
export function PracticeCoverValue({
  children,
  ...props
}: PracticeCoverValueProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { PracticeCoverValueProps } from './types'
