import { fireEvent, render, screen } from '@testing-library/react'
import type { FormEvent } from 'react'
import { expect, it, vi } from 'vitest'
import {
  AuthBackButton,
  AuthSubmitButton,
} from '../../src/compatibility/Button'

it.each([
  { Action: AuthBackButton, name: 'back', submits: false },
  { Action: AuthSubmitButton, name: 'submit', submits: true },
])(
  'preserves native activation and form behavior for $name',
  ({ Action, submits }) => {
    const onAction = vi.fn()
    const onSubmit = vi.fn((event: FormEvent) => event.preventDefault())

    render(
      <form onSubmit={onSubmit}>
        <Action onClick={onAction}>Continuar</Action>
      </form>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Continuar' }))

    expect(onAction).toHaveBeenCalledOnce()
    expect(onSubmit).toHaveBeenCalledTimes(submits ? 1 : 0)
  },
)
