import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { AuthResendAction } from '../../../src/components/Auth/AuthResendAction'

it('preserves structured caller content and native attributes without a theme provider', () => {
  render(
    <AuthResendAction data-testid="auth-content">
      <strong>Conteúdo da etapa</strong>
    </AuthResendAction>,
  )

  expect(
    screen.getByTestId('auth-content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo da etapa')
})
