import { fireEvent, render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { describe, expect, it, vi } from 'vitest'
import { ScheduleCalendar } from '.'
import { ScheduleCalendarAgenda } from './Agenda'
import { ScheduleCalendarMonth } from './Month'
import { scheduleCalendarFixture as fixture } from './fixtures'

describe('ScheduleCalendar', () => {
  it('keeps adjacent-month days out of the compact month agenda', () => {
    render(
      <ScheduleCalendarAgenda
        {...fixture}
        view="month"
        days={[{ ...fixture.days[4], outsideMonth: true }, fixture.days[5]]}
      />,
    )
    expect(
      screen.queryByRole('heading', { name: /Qui, 15/, hidden: true }),
    ).toBeNull()
    expect(
      screen.getByRole('heading', { name: 'Sex, 16', hidden: true }),
    ).toBeInTheDocument()
  })

  it('previews available slots and counts lessons, keeping other actions behind expansion', () => {
    const onSlotClick = vi.fn()
    const daySlots = fixture.slots
      .filter((slot) => slot.dateKey === fixture.days[5].dateKey)
      .map((slot) =>
        slot.startMinute < 840
          ? { ...slot, state: 'unavailable' as const }
          : slot,
      )
    render(
      <ScheduleCalendarAgenda
        {...fixture}
        days={[fixture.days[5]]}
        slots={daySlots}
        onSlotClick={onSlotClick}
      />,
    )
    expect(screen.getByText('3 aulas')).toBeInTheDocument()
    expect(screen.queryByText(/itens/)).toBeNull()
    expect(screen.queryByLabelText(daySlots[0].label)).toBeNull()
    expect(screen.getByLabelText(daySlots[16].label)).toBeInTheDocument()
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Ver mais 21 horários',
        hidden: true,
      }),
    )
    fireEvent.click(screen.getByLabelText(daySlots[0].label))
    expect(onSlotClick).toHaveBeenCalledExactlyOnceWith(daySlots[0].id)
  })

  it('keeps unavailable actions reachable when there are no available slots', () => {
    const daySlots = fixture.slots
      .filter((slot) => slot.dateKey === fixture.days[4].dateKey)
      .slice(0, 2)
      .map((slot) => ({ ...slot, state: 'unavailable' as const }))
    render(
      <ScheduleCalendarAgenda
        {...fixture}
        days={[fixture.days[4]]}
        slots={daySlots}
        events={[]}
      />,
    )
    expect(screen.getByText('sem aulas')).toBeInTheDocument()
    expect(screen.queryByLabelText(daySlots[0].label)).toBeNull()
    fireEvent.click(
      screen.getByRole('button', { name: 'Ver 2 horários', hidden: true }),
    )
    expect(screen.getByLabelText(daySlots[0].label)).toBeInTheDocument()
  })

  it('expands hidden month lessons without opening a slot action', () => {
    const onSlotClick = vi.fn(),
      onOpenEvent = vi.fn()
    const extraEvents = [960, 1020].map((startMinute) => ({
      ...fixture.events[0],
      id: `extra-${startMinute}`,
      startMinute,
      timeLabel: `${startMinute / 60}:00`,
      title: `Aula ${startMinute / 60}`,
      label: `Aula ${startMinute / 60}:00`,
    }))
    render(
      <ScheduleCalendarMonth
        {...fixture}
        events={[...fixture.events, ...extraEvents]}
        onSlotClick={onSlotClick}
        onOpenEvent={onOpenEvent}
      />,
    )
    expect(screen.queryByRole('button', { name: 'Aula 17:00' })).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: '+2 mais' }))
    expect(onSlotClick).not.toHaveBeenCalled()
    fireEvent.click(screen.getByRole('button', { name: 'Aula 17:00' }))
    expect(onOpenEvent).toHaveBeenCalledExactlyOnceWith('extra-1020')
    fireEvent.click(screen.getByRole('button', { name: 'Mostrar menos' }))
    expect(screen.queryByRole('button', { name: 'Aula 17:00' })).toBeNull()
  })

  it.each([false, true])(
    'keeps the next pointer click after dragging (drag click consumed: %s)',
    (consumeDragClick) => {
      const onSlotClick = vi.fn(),
        onSlotSelection = vi.fn()
      render(
        <ScheduleCalendar
          {...fixture}
          onSlotClick={onSlotClick}
          onSlotSelection={onSlotSelection}
        />,
      )
      const start = screen.getByRole('button', {
        name: '2026-10-15, 14:00 · Disponível',
      })
      const end = screen.getByRole('button', {
        name: '2026-10-15, 14:30 · Disponível',
      })
      fireEvent.pointerDown(start, { button: 0, pointerType: 'mouse' })
      fireEvent.pointerEnter(end)
      fireEvent.pointerUp(end)
      expect(onSlotSelection).toHaveBeenCalledOnce()
      if (consumeDragClick) fireEvent.click(end)
      expect(onSlotClick).not.toHaveBeenCalled()
      fireEvent.pointerDown(start, { button: 0, pointerType: 'mouse' })
      fireEvent.pointerUp(start)
      fireEvent.click(start)
      expect(onSlotClick).toHaveBeenCalledExactlyOnceWith('2026-10-15-840')
    },
  )

  it('lets the compact agenda expand later half-hour actions', () => {
    const onSlotClick = vi.fn()
    render(
      <ScheduleCalendarAgenda
        {...fixture}
        days={[fixture.days[4]]}
        onSlotClick={onSlotClick}
      />,
    )
    fireEvent.click(screen.getByText('Ver mais 25 horários'))
    fireEvent.click(screen.getByLabelText('2026-10-15, 14:30 · Disponível'))
    expect(onSlotClick).toHaveBeenCalledExactlyOnceWith('2026-10-15-870')
    fireEvent.click(screen.getByText('Mostrar menos horários'))
    expect(screen.queryByLabelText('2026-10-15, 14:30 · Disponível')).toBeNull()
  })
  it('opens adjacent half-hour events independently and preserves full accessible labels', () => {
    const onOpenEvent = vi.fn()
    render(<ScheduleCalendar {...fixture} onOpenEvent={onOpenEvent} />)
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Marina Albuquerque, experimental, 14:00 às 14:30',
      }),
    )
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Giovana Oliveira, experimental, 14:30 às 15:00',
      }),
    )
    expect(onOpenEvent.mock.calls).toEqual([['trial-one'], ['trial-two']])
  })

  it('selects a free half-hour, but does not open an occupied interval', () => {
    const onSlotClick = vi.fn()
    render(<ScheduleCalendar {...fixture} onSlotClick={onSlotClick} />)
    fireEvent.click(
      screen.getByRole('button', { name: '2026-10-15, 14:30 · Disponível' }),
    )
    fireEvent.click(
      screen.getByRole('button', { name: '2026-10-16, 14:30 · Disponível' }),
    )
    expect(onSlotClick).toHaveBeenCalledExactlyOnceWith('2026-10-15-870')
  })

  it('supports rectangular pointer selection without including occupied slots', () => {
    const onSlotSelection = vi.fn()
    render(<ScheduleCalendar {...fixture} onSlotSelection={onSlotSelection} />)
    fireEvent.pointerDown(
      screen.getByRole('button', { name: '2026-10-15, 14:00 · Disponível' }),
      { button: 0, pointerType: 'mouse' },
    )
    const target = screen.getByRole('button', {
      name: '2026-10-16, 14:30 · Disponível',
    })
    fireEvent.pointerEnter(target)
    fireEvent.pointerUp(target)
    expect(onSlotSelection).toHaveBeenCalledExactlyOnceWith([
      '2026-10-15-840',
      '2026-10-15-870',
    ])
  })

  it('supports Shift+Arrow selection and Enter without swallowing the next click', () => {
    const onSlotSelection = vi.fn(),
      onSlotClick = vi.fn()
    render(
      <ScheduleCalendar
        {...fixture}
        onSlotSelection={onSlotSelection}
        onSlotClick={onSlotClick}
      />,
    )
    const first = screen.getByRole('button', {
      name: '2026-10-15, 14:00 · Disponível',
    })
    fireEvent.keyDown(first, { key: 'ArrowDown', shiftKey: true })
    const next = screen.getByRole('button', {
      name: '2026-10-15, 14:30 · Disponível',
    })
    expect(next).toHaveFocus()
    fireEvent.keyDown(next, { key: 'Enter' })
    expect(onSlotSelection).toHaveBeenCalledExactlyOnceWith([
      '2026-10-15-840',
      '2026-10-15-870',
    ])
    fireEvent.click(first)
    expect(onSlotClick).toHaveBeenCalledExactlyOnceWith('2026-10-15-840')
  })

  it('renders month actions with keyboard-accessible buttons', () => {
    const onSlotClick = vi.fn()
    render(
      <ScheduleCalendar {...fixture} view="month" onSlotClick={onSlotClick} />,
    )
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Qui, 15 de outubro · Opções dos horários',
      }),
    )
    expect(onSlotClick).toHaveBeenCalledExactlyOnceWith('2026-10-15-480')
    expect(
      screen.getAllByRole('button', { name: /experimental/ }),
    ).toHaveLength(2)
  })

  it('server renders with no private theme or browser globals', () => {
    expect(renderToString(<ScheduleCalendar {...fixture} />)).toContain(
      'lsui-sc-schedule-calendar',
    )
  })
})
