import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { FormError } from '../../../src/components/Form/FormError'

it('exposes the caller error without owning validation state', () => {
  const { rerender } = render(
    <FormError id="error">Escolha uma categoria.</FormError>,
  )

  expect(screen.getByRole('alert').textContent).toBe('Escolha uma categoria.')

  rerender(<FormError>Não foi possível enviar.</FormError>)

  expect(screen.getByRole('alert').textContent).toBe('Não foi possível enviar.')
})
