import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { AuthBrandFooter } from '../../../src/components/Auth/AuthBrandFooter'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <AuthBrandFooter data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </AuthBrandFooter>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
