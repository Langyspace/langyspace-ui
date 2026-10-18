import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { AuthBrandAccent } from '../../../src/components/Auth/AuthBrandAccent'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <AuthBrandAccent data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </AuthBrandAccent>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
