import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { AuthSuccessState } from '../../../src/components/Auth/AuthSuccessState'

it('preserves structured caller content and native attributes without a theme provider', () => {
  render(
    <AuthSuccessState data-testid="auth-content">
      <strong>Conteúdo da etapa</strong>
    </AuthSuccessState>,
  )

  expect(
    screen.getByTestId('auth-content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo da etapa')
})
