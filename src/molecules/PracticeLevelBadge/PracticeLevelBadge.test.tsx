import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { PracticeLevelBadge } from '.'
afterEach(cleanup)
it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <PracticeLevelBadge data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </PracticeLevelBadge>,
  )
  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
