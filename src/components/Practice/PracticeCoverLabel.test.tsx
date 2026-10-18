import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { PracticeCoverLabel } from './PracticeCoverLabel'

afterEach(cleanup)

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
