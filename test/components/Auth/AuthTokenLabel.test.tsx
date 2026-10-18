import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { AuthTokenLabel } from '../../../src/components/Auth/AuthTokenLabel'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <AuthTokenLabel data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </AuthTokenLabel>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
