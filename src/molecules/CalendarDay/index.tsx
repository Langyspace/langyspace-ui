import * as Styled from './styles'
import type { CalendarDayProps } from './types'

export function CalendarDay({
  day,
  children,
  muted = false,
  onOpen,
  openLabel,
  ...props
}: CalendarDayProps) {
  return (
    <Styled.Root
      {...props}
      data-muted={muted}
      data-interactive={Boolean(onOpen)}
    >
      {onOpen ? (
        <Styled.OpenButton
          aria-label={openLabel}
          onClick={onOpen}
          type="button"
        >
          {day}
        </Styled.OpenButton>
      ) : (
        day
      )}
      {children}
    </Styled.Root>
  )
}

export type { CalendarDayProps } from './types'
