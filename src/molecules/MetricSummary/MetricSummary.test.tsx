import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { MetricSummary } from '.'
import { MetricLabel } from '../../atoms/MetricLabel'
import { MetricValue } from '../../atoms/MetricValue'

afterEach(cleanup)

it('styles the public value and label together without a theme or private markup', () => {
  render(
    <MetricSummary>
      <MetricValue>42</MetricValue>
      <MetricLabel>Acertos</MetricLabel>
    </MetricSummary>,
  )

  expect(screen.getByText('42')).toHaveStyle({
    fontSize: '1.25rem',
    fontWeight: '700',
  })
  expect(screen.getByText('Acertos')).toHaveStyle({
    textTransform: 'uppercase',
    fontWeight: '600',
  })
})

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <MetricSummary data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </MetricSummary>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
