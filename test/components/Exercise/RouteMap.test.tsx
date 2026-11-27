import { renderToString } from 'react-dom/server'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'
import { RouteMap } from '../../../src/components/InteractiveMaterial/RouteMap'
import town from '../../../stories/materials/Course/lessons/a1-09.json'
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

it('uses finished artwork without drawing sketch roads over it, while retaining accessible landmark selection', async () => {
  const select = vi.fn()
  const map = town.activities.s_mission.map
  const view = render(
    <RouteMap
      {...map}
      image={{ ...map.image, src: '/town.png' }}
      revealedIds={[]}
      onSelect={select}
    />,
  )
  expect(screen.getByRole('img')).toHaveAttribute('src', '/town.png')
  expect(view.container.querySelector('svg line')).toBeNull()
  expect(screen.getByText('Main Street')).toBeVisible()
  expect(screen.getByText('First Avenue')).toBeVisible()
  expect(screen.getByText('Second Avenue')).toBeVisible()
  const cafe = screen.getByRole('button', { name: 'café' })
  expect(within(cafe).getByText('café')).not.toBeVisible()
  cafe.focus()
  await userEvent.keyboard('{Enter}')
  expect(select).toHaveBeenCalledWith('cafe')
  view.rerender(
    <RouteMap
      {...map}
      image={{ ...map.image, src: '/town.png' }}
      revealedIds={['cafe', 'hotel']}
      selectedId="cafe"
      onSelect={select}
    />,
  )
  expect(cafe).toHaveFocus()
  expect(cafe).toHaveAttribute('aria-pressed', 'true')
  expect(within(cafe).getByText('café')).toBeVisible()
  const hotel = screen.getByRole('button', { name: 'hotel' })
  expect(within(hotel).getByRole('img', { name: 'Start' })).toBeVisible()
  expect(within(hotel).queryByText('Start')).toBeNull()
})

it('keeps the same six landmarks and two ordered right turns across all A1.09 map activities', () => {
  const reference = town.activities.s_mission.map
  const maps = Object.values(town.activities).filter(
    (activity) => activity.type === 'map',
  )
  expect(maps).toHaveLength(4)
  for (const activity of maps) {
    expect('map' in activity && activity.map.places).toEqual(reference.places)
    expect('map' in activity && activity.map.streets).toEqual(reference.streets)
    expect('map' in activity && activity.map.image).toEqual(reference.image)
  }
  const byId = Object.fromEntries(
    reference.places.map((place) => [place.id, place]),
  )
  expect(byId.hotel!.yPercent).toBeGreaterThan(byId.bank!.yPercent)
  expect(byId.cafe!.xPercent).toBeLessThan(byId.pharmacy!.xPercent)
  expect(byId.market!.xPercent).toBeLessThan(byId.park!.xPercent)
  expect(
    reference.streets.find((street) => street.id === 'first')!.from.y,
  ).toBeGreaterThan(
    reference.streets.find((street) => street.id === 'second')!.from.y,
  )
})
