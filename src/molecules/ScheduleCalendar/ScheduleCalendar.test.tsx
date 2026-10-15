import { fireEvent, render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { describe, expect, it, vi } from 'vitest'
import { ScheduleCalendar } from '.'
import { ScheduleCalendarAgenda } from './Agenda'
import { scheduleCalendarFixture as fixture } from './fixtures'

describe('ScheduleCalendar', () => {
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
