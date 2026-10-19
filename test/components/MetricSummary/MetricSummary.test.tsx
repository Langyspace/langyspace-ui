import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { it, expect } from 'vitest'
import { MetricSummary } from '../../../src/components/MetricSummary/MetricSummary'

it('preserves zero, structured labels, native attributes and the container ref', () => {
  const ref = createRef<HTMLDivElement>()
  render(
    <MetricSummary
      ref={ref}
      data-testid="summary"
      value={0}
      label={<span>Acertos</span>}
    />,
  )
  expect(ref.current).toBe(screen.getByTestId('summary'))
  expect(screen.getByText('0')).toBeVisible()
  expect(screen.getByText('Acertos').tagName).toBe('SPAN')
  expect(ref.current?.children).toHaveLength(2)
})

it('styles value and label together without a product theme', () => {
  render(<MetricSummary value={42} label="Acertos" />)
  expect(screen.getByText('42')).toHaveStyle({
    fontSize: '1.25rem',
    fontWeight: '700',
  })
  expect(screen.getByText('Acertos')).toHaveStyle({
    textTransform: 'uppercase',
    fontWeight: '600',
  })
})
