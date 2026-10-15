import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import { AuthEyebrow } from '.'
afterEach(cleanup)

it('preserves structured caller content and native attributes without a theme provider', () => {
  render(
    <AuthEyebrow data-testid="auth-content">
      <strong>Conteúdo da etapa</strong>
    </AuthEyebrow>,
  )
  expect(
    screen.getByTestId('auth-content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo da etapa')
})
