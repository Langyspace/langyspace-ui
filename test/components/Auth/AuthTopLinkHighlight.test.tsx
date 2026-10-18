import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { AuthTopLinkHighlight } from '../../../src/components/Auth/AuthTopLinkHighlight'

it('preserves structured caller content and native attributes without a theme provider', () => {
  render(
    <AuthTopLinkHighlight data-testid="auth-content">
      <strong>Conteúdo da etapa</strong>
    </AuthTopLinkHighlight>,
  )

  expect(
    screen.getByTestId('auth-content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo da etapa')
})
