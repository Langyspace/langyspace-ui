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

it('owns the decorative completion mark without hiding the supplied heading', () => {
  const { container } = render(
    <AuthSuccessState>
      <h2>Bem-vinda</h2>
    </AuthSuccessState>,
  )
  expect(screen.getByRole('heading', { name: 'Bem-vinda' })).toBeVisible()
  expect(container.querySelector('.lsui-sc-auth-success-icon')).toHaveAttribute(
    'aria-hidden',
    'true',
  )
  expect(container.querySelectorAll('svg')).toHaveLength(1)
})
