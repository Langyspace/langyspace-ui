import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { ShadowingContextPhrase } from '../../../src/components/Shadowing/ShadowingContextPhrase'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <ShadowingContextPhrase data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </ShadowingContextPhrase>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
