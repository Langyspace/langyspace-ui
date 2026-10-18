import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { AuthFooterLink } from '../../../src/components/Auth/AuthFooterLink'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <AuthFooterLink data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </AuthFooterLink>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
