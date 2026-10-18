import { cleanup, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { afterEach, it, expect } from 'vitest'
import { MetricSummary } from './MetricSummary'
import { MetricLabel } from './MetricSummary.compatibility'
import { MetricValue } from './MetricSummary.compatibility'

afterEach(cleanup)

it('renders a zero value and structured label with the same markup as the legacy composition', () => {
  const label = <span>Acertos</span>
  const legacy = render(
    <MetricSummary>
      <MetricValue>{0}</MetricValue>
      <MetricLabel>{label}</MetricLabel>
    </MetricSummary>,
  )
  const original = legacy.container.innerHTML
  legacy.unmount()
  const ref = createRef<HTMLDivElement>()
  const current = render(<MetricSummary ref={ref} value={0} label={label} />)

  expect(current.container.innerHTML).toBe(original)
  expect(ref.current).toBe(current.container.firstElementChild)
  expect(screen.getByText('0')).toBeVisible()
})

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
