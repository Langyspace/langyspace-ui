import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import type React from 'react'
import { AuthBackButton } from '.'
afterEach(cleanup)

it('preserves native activation and the auth action form behavior', () => {
  const action = vi.fn(),
    submit = vi.fn((event: React.FormEvent) => event.preventDefault())
  render(
    <form onSubmit={submit}>
      <AuthBackButton onClick={action}>Continuar</AuthBackButton>
    </form>,
  )
  const button = screen.getByRole('button', { name: 'Continuar' })
  fireEvent.click(button)
  expect(action).toHaveBeenCalledOnce()
  expect(submit).not.toHaveBeenCalled()
})
