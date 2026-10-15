import * as Styled from './styles'
import type { CalendarScrollerProps } from './types'
export function CalendarScroller({
  children,
  ...props
}: CalendarScrollerProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { CalendarScrollerProps } from './types'
