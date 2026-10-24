import type { ScheduleCalendarLabels } from './ScheduleCalendar.types'

export const defaultScheduleCalendarLabels: ScheduleCalendarLabels = {
  agendaEmpty: 'Nenhuma aula ou horário acionável.',
  agendaEventCount: (count) => `${count} ${count === 1 ? 'aula' : 'aulas'}`,
  agendaNoEvents: 'sem aulas',
  calendar: 'Calendário de aulas',
  dayOptions: (dayLabel) => `${dayLabel} · Opções dos horários`,
  showFewerEvents: 'Mostrar menos',
  showFewerSlots: 'Mostrar menos horários',
  showMoreEvents: (count) => `+${count} mais`,
  showMoreSlots: (count, hasPreview) =>
    `Ver ${hasPreview ? 'mais ' : ''}${count} horários`,
  today: 'Hoje',
  unavailableSlot: (slotLabel) => `${slotLabel} · Indisponível`,
}

export const resolveScheduleCalendarLabels = (
  labels: Partial<ScheduleCalendarLabels> | undefined,
): ScheduleCalendarLabels => ({ ...defaultScheduleCalendarLabels, ...labels })
