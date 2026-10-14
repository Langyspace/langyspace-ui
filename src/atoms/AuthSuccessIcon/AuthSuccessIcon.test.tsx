import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import { AuthSuccessIcon } from '.'
afterEach(cleanup)

it('keeps the decorative auth state outside the accessibility tree and forwards attributes', () => {
  const { container } = render(<AuthSuccessIcon data-testid="auth-state" />)
  expect(screen.getByTestId('auth-state').getAttribute('aria-hidden')).toBe(
    'true',
  )
  expect(
    container.querySelector('[data-testid="auth-state"]')?.className,
  ).toContain('lsui-sc-auth-success-icon')
})
