import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { AuthMobileFooter } from '../../../src/components/Auth/AuthMobileFooter'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <AuthMobileFooter data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </AuthMobileFooter>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
