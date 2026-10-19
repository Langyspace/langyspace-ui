import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { AuthChannelHint } from '../../../src/components/Auth/AuthChannelHint'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <AuthChannelHint data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </AuthChannelHint>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
