import * as Styled from './styles'
import type { CalendarMonthGridProps } from './types'
export function CalendarMonthGrid({
  children,
  ...props
}: CalendarMonthGridProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { CalendarMonthGridProps } from './types'
