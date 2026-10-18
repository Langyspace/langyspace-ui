import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { MetricValue } from '../../../src/compatibility/MetricSummary'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <MetricValue data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </MetricValue>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
