import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import type React from 'react'
import { AuthForm } from '.'

afterEach(cleanup)

it('forwards form submission and preserves caller fields', () => {
  const submit = vi.fn((event: React.FormEvent) => event.preventDefault())

  render(
    <AuthForm aria-label="Acesso" onSubmit={submit}>
      <input aria-label="Celular" />
      <button type="submit">Enviar</button>
    </AuthForm>,
  )

  fireEvent.click(screen.getByRole('button'))

  expect(submit).toHaveBeenCalledOnce()
  expect(screen.getByRole('textbox', { name: 'Celular' })).toBeTruthy()
})
