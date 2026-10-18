import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { ShadowingActivePhrase } from './ShadowingActivePhrase'

afterEach(cleanup)

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <ShadowingActivePhrase data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </ShadowingActivePhrase>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
