import type { CalendarScrollerProps } from './CalendarScroller.types'
import * as Styled from './CalendarScroller.styles'

export function CalendarScroller({
  children,
  ...props
}: CalendarScrollerProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
