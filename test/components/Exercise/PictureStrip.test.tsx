import { renderToString } from 'react-dom/server'
import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { PictureStrip } from '../../../src/components/Exercise/PictureStrip'

it('keeps distinct visual prompts and their captions accessible from an unchanged source atlas', () => {
  render(
    <PictureStrip
      aria-label="Weekend album"
      items={[
        {
          id: 'first',
          src: '/album.webp',
          alt: 'Visiting the market',
          caption: 'Saturday morning',
          region: {
            columns: 3,
            rows: 2,
            column: 1,
            row: 0,
            sourceAspectRatio: 1.5,
          },
        },
        {
          id: 'second',
          src: '/coffee.webp',
          alt: 'Coffee with a friend',
          caption: 'Saturday afternoon',
        },
      ]}
    />,
  )
  expect(
    screen.getByRole('region', { name: 'Weekend album' }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('img', { name: 'Visiting the market' }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('img', { name: 'Coffee with a friend' }),
  ).toHaveAttribute('src', '/coffee.webp')
  expect(screen.getAllByRole('figure')).toHaveLength(2)
  expect(screen.getByText('Saturday morning')).toBeVisible()
})
it('renders the visual prompts without a browser', () => {
  const html = renderToString(
    <PictureStrip
      items={[
        {
          id: 'item',
          src: '/image.webp',
          alt: 'A quiet room',
          caption: 'Room A · two beds',
        },
      ]}
    />,
  )
  expect(html).toContain('lsui-sc-picture-strip')
  expect(html).toContain('Room A · two beds')
  expect(html).toContain('A quiet room')
})
