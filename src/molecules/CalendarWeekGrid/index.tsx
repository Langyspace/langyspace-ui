import * as Styled from './styles'
import type { CalendarWeekGridProps } from './types'

export function CalendarWeekGrid({
  children,
  ...props
}: CalendarWeekGridProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { CalendarWeekGridProps } from './types'
