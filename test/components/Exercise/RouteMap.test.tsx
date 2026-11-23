import { renderToString } from 'react-dom/server'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'
import { RouteMap } from '../../../src/components/InteractiveMaterial/RouteMap'
it('keeps place labels mounted, supports keyboard selection and identifies the starting place', async () => {
  const select = vi.fn()
  const props = {
    label: 'A small town',
    places: [
      { id: 'hotel', label: 'hotel', symbol: 'H', xPercent: 20, yPercent: 80 },
      { id: 'park', label: 'park', symbol: 'P', xPercent: 80, yPercent: 30 },
    ],
    streets: [{ id: 'main', from: { x: 20, y: 80 }, to: { x: 80, y: 30 } }],
    startId: 'hotel',
    onSelect: select,
  }
  const view = render(<RouteMap {...props} revealedIds={['hotel']} />)
  expect(
    within(screen.getByRole('button', { name: 'hotel' })).getByText('Start'),
  ).toBeVisible()
  const park = screen.getByRole('button', { name: 'park' })
  expect(within(park).getByText('park')).not.toBeVisible()
  park.focus()
  await userEvent.keyboard('{Enter}')
  expect(select).toHaveBeenCalledWith('park')
  view.rerender(
    <RouteMap {...props} revealedIds={['hotel', 'park']} selectedId="park" />,
  )
  expect(park).toHaveFocus()
  expect(park).toHaveAttribute('aria-pressed', 'true')
  expect(within(park).getByText('park')).toBeVisible()
})

it('renders its meaningful reference without a browser', () => {
  const html = renderToString(
    <RouteMap
      label="Town reference"
      startId="hotel"
      places={[{ id: 'hotel', label: 'Hotel', xPercent: 20, yPercent: 80 }]}
      streets={[]}
    />,
  )
  expect(html).toContain('Town reference')
  expect(html).toContain('Hotel')
  expect(html).toContain('Start')
})
