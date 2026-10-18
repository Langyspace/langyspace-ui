import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { MetricLabel } from '../../../src/compatibility/MetricSummary'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <MetricLabel data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </MetricLabel>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
