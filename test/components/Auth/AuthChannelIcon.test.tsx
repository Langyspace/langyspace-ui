import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { AuthChannelIcon } from '../../../src/components/Auth/AuthChannelIcon'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <AuthChannelIcon data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </AuthChannelIcon>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
