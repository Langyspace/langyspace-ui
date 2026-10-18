import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { StatValue } from '../../../src/compatibility/StatCard'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <StatValue data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </StatValue>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
