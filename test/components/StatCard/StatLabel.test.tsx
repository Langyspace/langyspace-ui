import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { StatLabel } from '../../../src/compatibility/StatCard'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <StatLabel data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </StatLabel>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
