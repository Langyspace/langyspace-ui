import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { PracticeLevelBadge } from '../../../src/components/Practice/PracticeLevelBadge'

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
