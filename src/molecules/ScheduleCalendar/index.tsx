import { CalendarControls } from '../CalendarControls'
import { CalendarScroller } from '../CalendarScroller'
import { ScheduleCalendarWeek } from './Week'
import { ScheduleCalendarMonth } from './Month'
import { ScheduleCalendarAgenda } from './Agenda'
import * as Styled from './styles'
import type { ScheduleCalendarProps } from './types'

export function ScheduleCalendar({
  view,
  navigation,
  ...body
}: ScheduleCalendarProps) {
  return (
    <Styled.Root aria-label="Calendário de aulas">
      <CalendarControls {...navigation} />
      <Styled.Desktop>
        <CalendarScroller data-calendar-scroller="true">
          {view === 'week' ? (
            <ScheduleCalendarWeek {...body} />
          ) : (
            <ScheduleCalendarMonth {...body} />
          )}
        </CalendarScroller>
      </Styled.Desktop>
      <ScheduleCalendarAgenda {...body} view={view} />
    </Styled.Root>
  )
}

export type {
  ScheduleCalendarProps,
  ScheduleCalendarDay,
  ScheduleCalendarSlot,
  ScheduleCalendarEvent,
} from './types'
