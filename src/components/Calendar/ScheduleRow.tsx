import * as Styled from './ScheduleRow.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface ScheduleRowProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'onClick' | 'onKeyDown' | 'role' | 'tabIndex'
> {
  time: ReactNode
  participant: ReactNode
  actions?: ReactNode
  muted?: boolean
  onOpen: () => void
  openLabel: string
}

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
      {actions && (
        <Styled.Actions onClick={(event) => event.stopPropagation()}>
          {actions}
        </Styled.Actions>
      )}
    </Styled.Root>
  )
}
