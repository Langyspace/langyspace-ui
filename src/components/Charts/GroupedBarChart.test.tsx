import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { GroupedBarChart } from './GroupedBarChart'

afterEach(cleanup)

it('keeps descriptions and keyboard endpoints', () => {
  render(
    <GroupedBarChart
      aria-label="Evolução"
      items={[
        {
          id: 'a',
          label: 'Seg',
          description: 'Segunda: 12 cliques',
          values: [12, 2],
        },
      ]}
    />,
  )

  const region = screen.getByRole('region')
  Object.defineProperty(region, 'scrollWidth', { value: 1000 })
  fireEvent.keyDown(region, { key: 'End' })

  expect(region.scrollLeft).toBe(1000)

  fireEvent.keyDown(region, { key: 'Home' })

  expect(region.scrollLeft).toBe(0)
  expect(screen.getByRole('img').getAttribute('aria-label')).toContain(
    '12 cliques',
  )
})
