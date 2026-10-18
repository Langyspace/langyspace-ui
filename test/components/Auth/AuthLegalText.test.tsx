import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { AuthLegalText } from '../../../src/components/Auth/AuthLegalText'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <AuthLegalText data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </AuthLegalText>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
