import * as Styled from './styles'
import type { PracticeCoverLabelProps } from './types'
export function PracticeCoverLabel({
  children,
  ...props
}: PracticeCoverLabelProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { PracticeCoverLabelProps } from './types'
