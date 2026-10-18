import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { PracticeCoverLabel } from '../../../src/components/Practice/PracticeCoverLabel'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <PracticeCoverLabel data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </PracticeCoverLabel>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
