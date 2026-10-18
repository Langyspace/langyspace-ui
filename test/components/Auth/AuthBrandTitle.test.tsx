import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { AuthBrandTitle } from '../../../src/components/Auth/AuthBrandTitle'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <AuthBrandTitle data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </AuthBrandTitle>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
