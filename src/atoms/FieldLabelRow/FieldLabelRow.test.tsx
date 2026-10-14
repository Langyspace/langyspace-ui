import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { FieldLabelRow } from '.'
afterEach(cleanup)
it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FieldLabelRow data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FieldLabelRow>,
  )
  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
