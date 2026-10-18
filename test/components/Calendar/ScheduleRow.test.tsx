import { render, screen, fireEvent } from '@testing-library/react'
import { it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { ScheduleRow } from '../../../src/components/Calendar/ScheduleRow'

it('keeps native keyboard activation independent for the primary and secondary actions', async () => {
  const open = vi.fn()
  const action = vi.fn()
  const user = userEvent.setup()

  render(
    <ScheduleRow
      onOpen={open}
      openLabel="Abrir aula de Pessoa"
      time="10:00"
      participant="Pessoa"
      actions={<button onClick={action}>Ação</button>}
    />,
  )

  screen.getByRole('button', { name: 'Ação' }).focus()
  await user.keyboard('{Enter}')

  expect(action).toHaveBeenCalledOnce()
  expect(open).not.toHaveBeenCalled()

  await user.keyboard(' ')

  expect(action).toHaveBeenCalledTimes(2)
  expect(open).not.toHaveBeenCalled()

  const primary = screen.getByRole('button', { name: 'Abrir aula de Pessoa' })

  expect(primary.tagName).toBe('BUTTON')
  expect(primary).not.toContainElement(
    screen.getByRole('button', { name: 'Ação' }),
  )

  primary.focus()
  await user.keyboard('{Enter}')

  expect(open).toHaveBeenCalledOnce()
})

it('keeps secondary clicks independent from row opening', () => {
  const open = vi.fn(),
    action = vi.fn()

  render(
    <ScheduleRow
      onOpen={open}
      openLabel="Abrir aula de Pessoa"
      time="10:00"
      participant="Pessoa"
      actions={<button onClick={action}>Ação</button>}
    />,
  )

  fireEvent.click(screen.getByRole('button', { name: 'Ação' }))

  expect(action).toHaveBeenCalledOnce()
  expect(open).not.toHaveBeenCalled()

  fireEvent.click(screen.getByText('Pessoa'))

  expect(open).toHaveBeenCalledOnce()
})
