import * as Styled from './styles'
import type { PracticeResultTitleProps } from './types'
export function PracticeResultTitle({
  children,
  ...props
}: PracticeResultTitleProps) {
  return <Styled.Title {...props}>{children}</Styled.Title>
}
export type { PracticeResultTitleProps } from './types'
