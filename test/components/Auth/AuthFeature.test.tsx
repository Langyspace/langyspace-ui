import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { AuthFeature } from '../../../src/components/Auth/AuthFeature'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <AuthFeature data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </AuthFeature>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
