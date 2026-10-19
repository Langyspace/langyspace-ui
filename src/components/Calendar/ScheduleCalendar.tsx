import { CalendarControls } from './CalendarControls'
import { CalendarScroller } from './CalendarScroller'
import { WeekView } from './WeekView'
import { MonthView } from './MonthView'
import { AgendaView } from './AgendaView'
import * as Styled from './ScheduleCalendar.styles'
import type { ScheduleCalendarProps } from './ScheduleCalendar.types'

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
          {view === 'week' ? <WeekView {...body} /> : <MonthView {...body} />}
        </CalendarScroller>
      </Styled.Desktop>
      <AgendaView {...body} view={view} />
    </Styled.Root>
  )
}

export type {
  ScheduleCalendarProps,
  ScheduleCalendarDay,
  ScheduleCalendarSlot,
  ScheduleCalendarEvent,
} from './ScheduleCalendar.types'
