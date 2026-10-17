import * as Styled from './styles'
import type { CalendarDayNumberProps } from './types'

export function CalendarDayNumber({
  children,
  ...props
}: CalendarDayNumberProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { CalendarDayNumberProps } from './types'
