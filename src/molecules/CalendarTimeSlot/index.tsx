import * as Styled from './styles'
import type { CalendarTimeSlotProps } from './types'
export function CalendarTimeSlot({
  tone = 'neutral',
  selected = false,
  type = 'button',
  ...props
}: CalendarTimeSlotProps) {
  return (
    <Styled.Root
      {...props}
      type={type}
      data-tone={tone}
      data-selected={selected}
    />
  )
}
export type { CalendarTimeSlotProps } from './types'
