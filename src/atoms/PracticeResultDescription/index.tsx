import * as Styled from './styles'
import type { PracticeResultDescriptionProps } from './types'
export function PracticeResultDescription({
  children,
  ...props
}: PracticeResultDescriptionProps) {
  return <Styled.Description {...props}>{children}</Styled.Description>
}
export type { PracticeResultDescriptionProps } from './types'
