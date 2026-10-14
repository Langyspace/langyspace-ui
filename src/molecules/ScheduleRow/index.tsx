import * as Styled from './styles'
import type { ScheduleRowProps } from './types'
export function ScheduleRow({
  time,
  participant,
  actions,
  muted = false,
  ...props
}: ScheduleRowProps) {
  return (
    <Styled.Root {...props} data-muted={muted}>
      <Styled.Time>{time}</Styled.Time>
      <Styled.Participant>{participant}</Styled.Participant>
      {actions && (
        <Styled.Actions onClick={(event) => event.stopPropagation()}>
          {actions}
        </Styled.Actions>
      )}
    </Styled.Root>
  )
}
export type { ScheduleRowProps } from './types'
