import * as Styled from './styles'
import type { CalendarEventProps } from './types'

export function CalendarEvent({
  tone = 'neutral',
  type = 'button',
  ...props
}: CalendarEventProps) {
  return (
    <Styled.Root
      {...props}
      type={type}
      data-tone={tone}
      data-ui-calendar-event="true"
    />
  )
}

export type { CalendarEventProps } from './types'
