import type { ScheduleCalendarProps } from './ScheduleCalendar.types'

export const scheduleCalendarFixture: ScheduleCalendarProps = {
  view: 'week',
  navigation: {
    label: '11 - 17 Outubro 2026',
    previousLabel: 'Semana anterior',
    nextLabel: 'Próxima semana',
    onPrevious: () => undefined,
    onNext: () => undefined,
    onToday: () => undefined,
  },
  days: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(
    (shortLabel, index) => ({
      id: String(index),
      dateKey: `2026-10-${11 + index}`,
      dayNumber: 11 + index,
      shortLabel,
      label: `${shortLabel}, ${11 + index} de outubro`,
      today: index === 4,
    }),
  ),
  slots: ['2026-10-15', '2026-10-16'].flatMap((dateKey) =>
    Array.from({ length: 28 }, (_, index) => {
      const startMinute = 480 + index * 30

      return {
        id: `${dateKey}-${startMinute}`,
        dateKey,
        startMinute,
        endMinute: startMinute + 30,
        label: `${dateKey}, ${Math.floor(startMinute / 60)}:${startMinute % 60 === 0 ? '00' : '30'} · Disponível`,
        state:
          dateKey === '2026-10-16' && startMinute >= 840 && startMinute < 950
            ? ('occupied' as const)
            : ('available' as const),
        interactive: !(
          dateKey === '2026-10-16' &&
          startMinute >= 840 &&
          startMinute < 950
        ),
      }
    }),
  ),
  events: [
    {
      id: 'trial-one',
      dateKey: '2026-10-16',
      startMinute: 840,
      durationMinutes: 30,
      timeLabel: '14:00',
      title: 'Marina',
      label: 'Marina Albuquerque, experimental, 14:00 às 14:30',
      badge: 'Exp.',
    },
    {
      id: 'trial-two',
      dateKey: '2026-10-16',
      startMinute: 870,
      durationMinutes: 30,
      timeLabel: '14:30',
      title: 'Giovana',
      label: 'Giovana Oliveira, experimental, 14:30 às 15:00',
      badge: 'Exp.',
    },
    {
      id: 'regular',
      dateKey: '2026-10-16',
      startMinute: 900,
      durationMinutes: 50,
      timeLabel: '15:00',
      title: 'Rafael',
      label: 'Rafael Souza, aula, 15:00 às 15:50',
      tone: 'success',
    },
  ],
  onOpenEvent: () => undefined,
  onSlotClick: () => undefined,
  onSlotSelection: () => undefined,
}
