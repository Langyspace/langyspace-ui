import * as Styled from './ScheduleRow.styles'
import type { ScheduleRowProps } from './ScheduleRow.types'

export function ScheduleRow({
  time,
  participant,
  actions,
  muted = false,
  onOpen,
  openLabel,
  ...props
}: ScheduleRowProps) {
  return (
    <Styled.Root {...props} data-muted={muted}>
      <Styled.OpenButton aria-label={openLabel} onClick={onOpen} type="button">
        <Styled.Time>{time}</Styled.Time>
        <Styled.Participant>{participant}</Styled.Participant>
      </Styled.OpenButton>
      {actions ? (
        <Styled.Actions
          onClick={(event) => {
            event.stopPropagation()
          }}
        >
          {actions}
        </Styled.Actions>
      ) : null}
    </Styled.Root>
  )
}
