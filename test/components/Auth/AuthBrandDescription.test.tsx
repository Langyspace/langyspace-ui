import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { AuthBrandDescription } from '../../../src/components/Auth/AuthBrandDescription'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <AuthBrandDescription data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </AuthBrandDescription>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
