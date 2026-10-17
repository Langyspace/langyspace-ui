import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'
import { CalendarDay } from '.'
import { CalendarDayNumber } from '../CalendarDayNumber'
import { CalendarEvent } from '../CalendarEvent'

it('opens the day and its event through independent native keyboard commands', async () => {
  const user = userEvent.setup()
  const onDay = vi.fn()
  const onEvent = vi.fn()

  render(
    <CalendarDay
      day={<CalendarDayNumber>15</CalendarDayNumber>}
      onOpen={onDay}
      openLabel="Abrir horários de 15 de outubro"
    >
      <CalendarEvent onClick={onEvent}>Aula de inglês</CalendarEvent>
    </CalendarDay>,
  )

  const day = screen.getByRole('button', {
    name: 'Abrir horários de 15 de outubro',
  })
  const event = screen.getByRole('button', { name: 'Aula de inglês' })

  expect(day).not.toContainElement(event)

  await user.tab()

  expect(day).toHaveFocus()

  await user.keyboard('{Enter}')

  expect(onDay).toHaveBeenCalledTimes(1)

  await user.tab()
  await user.keyboard(' ')

  expect(onEvent).toHaveBeenCalledTimes(1)
  expect(onDay).toHaveBeenCalledTimes(1)
})

it('keeps a day without an action as noninteractive content', () => {
  render(
    <CalendarDay day="15">
      <span>Sem horários</span>
    </CalendarDay>,
  )

  expect(screen.queryByRole('button')).not.toBeInTheDocument()
  expect(screen.getByText('Sem horários')).toBeVisible()
})
