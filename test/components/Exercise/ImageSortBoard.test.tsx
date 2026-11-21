import { useState } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { expect, it, vi } from 'vitest'
import { ImageSortBoard } from '../../../src/components/Exercise/ImageSortBoard'

const items = ['movies', 'music', 'dogs', 'cats', 'pizza', 'salad'].map(
  (label) => ({ id: label, label, imageUrl: `/${label}.webp` }),
)
const categories = [
  { id: 'like', label: 'I like' },
  { id: 'dislike', label: 'I don’t like' },
]
function Board({
  onAssign = () => undefined,
}: {
  onAssign?: (id: string, category: string | undefined) => void
}) {
  const [assignments, setAssignments] = useState<
    Record<string, string | undefined>
  >({})
  const [selectedId, setSelected] = useState<string>()
  return (
    <ImageSortBoard
      items={items}
      categories={categories}
      assignments={assignments}
      selectedId={selectedId}
      onSelect={setSelected}
      onAssign={(id, category) => {
        onAssign(id, category)
        setAssignments((old) => ({ ...old, [id]: category }))
      }}
    />
  )
}

it.each(['I like', 'I don’t like'])(
  'allows every item to be placed in %s independently, without a forced pair or evaluation',
  async (label) => {
    const user = userEvent.setup()
    render(<Board />)
    for (const item of items) {
      await user.click(screen.getByRole('button', { name: item.label }))
      await user.click(
        screen.getByRole('button', { name: `Move ${item.label} to ${label}` }),
      )
    }
    for (const item of items)
      expect(
        within(screen.getByRole('region', { name: label })).getByRole(
          'button',
          { name: item.label },
        ),
      ).toBeInTheDocument()
    expect(screen.queryByText(/Correct!|Try again/)).not.toBeInTheDocument()
  },
)

it('supports keyboard placement, reclassification and return to the bank while restoring focus', async () => {
  const user = userEvent.setup()
  render(<Board />)
  screen.getByRole('button', { name: 'movies' }).focus()
  await user.keyboard('{Enter}')
  const target = screen.getByRole('button', { name: 'Move movies to I like' })
  target.focus()
  await user.keyboard('{Enter}')
  expect(screen.getByRole('button', { name: 'movies' })).toHaveFocus()
  await user.click(
    screen.getByRole('button', { name: 'Move movies to I don’t like' }),
  )
  expect(
    within(screen.getByRole('region', { name: 'I don’t like' })).getByRole(
      'button',
      { name: 'movies' },
    ),
  ).toHaveFocus()
  await user.click(
    screen.getByRole('button', { name: 'Move movies to Pictures' }),
  )
  expect(
    within(screen.getByRole('region', { name: 'Pictures' })).getByRole(
      'button',
      { name: 'movies' },
    ),
  ).toHaveFocus()
})

it('supports native picture drag/drop and rejects unknown payloads', () => {
  const onAssign = vi.fn()
  render(<Board onAssign={onAssign} />)
  const data = {
    setData: vi.fn(),
    getData: vi.fn(() => 'music'),
    effectAllowed: '',
  }
  fireEvent.dragStart(screen.getByRole('button', { name: 'music' }), {
    dataTransfer: data,
  })
  expect(data.setData).toHaveBeenCalledWith('application/x-ui-picture', 'music')
  fireEvent.drop(screen.getByRole('region', { name: 'I like' }), {
    dataTransfer: data,
  })
  expect(onAssign).toHaveBeenLastCalledWith('music', 'like')
  data.getData.mockReturnValue('unknown')
  fireEvent.drop(screen.getByRole('region', { name: 'I don’t like' }), {
    dataTransfer: data,
  })
  expect(onAssign).toHaveBeenCalledTimes(1)
})

it('keeps empty target controls safe until a picture is selected', () => {
  const onAssign = vi.fn()
  render(<Board onAssign={onAssign} />)
  const target = screen.getByRole('button', {
    name: 'Choose a picture for I like',
  })
  expect(target).toBeDisabled()
  fireEvent.click(target)
  expect(onAssign).not.toHaveBeenCalled()
})

it('renders long labels and an all-in-one-group state without clipping or inner scrolling', () => {
  const sheet = new ServerStyleSheet()
  try {
    const html = renderToString(
      sheet.collectStyles(
        <ImageSortBoard
          items={items.map((item) => ({
            ...item,
            label: `Learning about ${item.label} with other people`,
          }))}
          categories={categories}
          assignments={Object.fromEntries(
            items.map((item) => [item.id, 'like']),
          )}
          onSelect={() => undefined}
          onAssign={() => undefined}
          footer={<p>Speaking support</p>}
        />,
      ),
    )
    expect(html.match(/<img /g)).toHaveLength(6)
    expect(html).toContain('lsui-sc-image-sort-board')
    expect(html).toContain('Speaking support')
    expect(sheet.getStyleTags()).not.toMatch(
      /overflow(?:-y)?:\s*(auto|scroll|hidden)/,
    )
    expect(sheet.getStyleTags()).toContain('object-fit:contain')
  } finally {
    sheet.seal()
  }
})
