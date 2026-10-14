import * as Styled from './styles'
import type { CalendarDayProps } from './types'
export function CalendarDay({ muted = false, ...props }: CalendarDayProps) {
  return (
    <Styled.Root
      {...props}
      data-muted={muted}
      data-interactive={Boolean(props.onClick)}
    />
  )
}
export type { CalendarDayProps } from './types'
