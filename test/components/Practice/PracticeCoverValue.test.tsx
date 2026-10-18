import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { PracticeCoverValue } from '../../../src/components/Practice/PracticeCoverValue'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <PracticeCoverValue data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </PracticeCoverValue>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
