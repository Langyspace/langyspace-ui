import { CalendarControls } from './CalendarControls'
import { CalendarScroller } from './CalendarScroller'
import { WeekView } from './WeekView'
import { MonthView } from './MonthView'
import { AgendaView } from './AgendaView'
import { resolveScheduleCalendarLabels } from './scheduleCalendarLabels'
import * as Styled from './ScheduleCalendar.styles'
import type { ScheduleCalendarProps } from './ScheduleCalendar.types'

export function ScheduleCalendar({
  view,
  navigation,
  labels,
  ...body
}: ScheduleCalendarProps) {
  const text = resolveScheduleCalendarLabels(labels)

  return (
    <Styled.Root aria-label={text.calendar}>
      <CalendarControls {...navigation} />
      <Styled.Desktop>
        <CalendarScroller data-calendar-scroller="true">
          {view === 'week' ? (
            <WeekView {...body} labels={text} />
          ) : (
            <MonthView {...body} labels={text} />
          )}
        </CalendarScroller>
      </Styled.Desktop>
      <AgendaView {...body} labels={text} view={view} />
    </Styled.Root>
  )
}
