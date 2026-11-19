import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { toId } from 'storybook/internal/csf'
import { MaterialsCatalog } from '../../../stories/materials/catalog/MaterialsCatalog'
import c101Meta from '../../../stories/materials/C101/C101.stories'

it('opens the implemented A2 story after filtering without unlocking unfinished lessons', async () => {
  const user = userEvent.setup()
  render(<MaterialsCatalog />)

  await user.click(screen.getByRole('button', { name: 'A2' }))

  expect(screen.getByRole('button', { name: 'A2' })).toHaveAttribute(
    'aria-pressed',
    'true',
  )
  expect(
    screen.getByRole('link', { name: /This week I’m working in Porto/ }),
  ).toHaveAttribute(
    'href',
    expect.stringContaining('?path=/story/materials-a2-01--complete-lesson'),
  )
  expect(screen.getAllByRole('link')).toHaveLength(1)
  expect(
    screen.getAllByText('Prévia ainda não disponível neste catálogo').length,
  ).toBeGreaterThan(0)
})

it('links C1 to its actual implemented story', () => {
  render(<MaterialsCatalog initialLevel="C1" />)

  expect(
    screen.getByRole('link', { name: /It tends to come across as/ }),
  ).toHaveAttribute(
    'href',
    expect.stringContaining(`?path=/story/${toId(c101Meta.title, 'Lesson')}`),
  )
})
