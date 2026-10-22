import { Button } from '../Button/Button'
import { IconButton } from '../IconButton/IconButton'
import * as Styled from './CalendarControls.styles'
import type { CalendarControlsProps } from './CalendarControls.types'

export function CalendarControls({
  children,
  groupLabel = 'Navegação do calendário',
  label,
  nextLabel,
  onNext,
  onPrevious,
  onToday,
  previousLabel,
  todayLabel = 'Hoje',
}: CalendarControlsProps) {
  return (
    <Styled.Container role="group" aria-label={groupLabel}>
      <IconButton aria-label={previousLabel} type="button" onClick={onPrevious}>
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </IconButton>
      <IconButton aria-label={nextLabel} type="button" onClick={onNext}>
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </IconButton>
      <Button
        density="compact"
        size="sm"
        variant="secondary"
        type="button"
        onClick={onToday}
      >
        {todayLabel}
      </Button>
      <Styled.Label>{label}</Styled.Label>
      {children}
    </Styled.Container>
  )
}
