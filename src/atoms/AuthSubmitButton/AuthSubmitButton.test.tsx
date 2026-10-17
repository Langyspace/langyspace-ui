import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import type React from 'react'
import { AuthSubmitButton } from '.'

afterEach(cleanup)

it('preserves native activation and the auth action form behavior', () => {
  const action = vi.fn(),
    submit = vi.fn((event: React.FormEvent) => event.preventDefault())

  render(
    <form onSubmit={submit}>
      <AuthSubmitButton onClick={action}>Continuar</AuthSubmitButton>
    </form>,
  )

  const button = screen.getByRole('button', { name: 'Continuar' })

  fireEvent.click(button)

  expect(action).toHaveBeenCalledOnce()
  expect(submit).toHaveBeenCalledOnce()
})
