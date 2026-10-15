import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { afterEach, it, expect, vi } from 'vitest'
import { ScheduleRow } from '.'
afterEach(cleanup)
it('keeps nested actions independent from row opening', () => {
  const open = vi.fn(),
    action = vi.fn()
  render(
    <ScheduleRow
      onClick={open}
      time="10:00"
      participant="Pessoa"
      actions={<button onClick={action}>Ação</button>}
    />,
  )
  fireEvent.click(screen.getByRole('button'))
  expect(action).toHaveBeenCalledOnce()
  expect(open).not.toHaveBeenCalled()
  fireEvent.click(screen.getByText('Pessoa'))
  expect(open).toHaveBeenCalledOnce()
})
