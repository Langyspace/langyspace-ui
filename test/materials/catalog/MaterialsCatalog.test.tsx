import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { toId } from 'storybook/internal/csf'
import { MaterialsCatalog } from '../../../stories/materials/catalog/MaterialsCatalog'
import c101Meta from '../../../stories/materials/C101/C101.stories'
import { materialCatalogUrl } from '../../../stories/materials/shared/materialCatalogNavigation'

it('returns to the local library and opens the selected lesson in the same local tab', () => {
  const destination = new URL(
    materialCatalogUrl(
      'http://127.0.0.1:8851/?studentPortalOrigin=https%3A%2F%2Fstudent.langy.space&page=s4#a1-03',
    ),
  )
  expect(destination.origin).toBe('http://127.0.0.1:8851')
  expect(destination.searchParams.get('view')).toBe('catalog')
  expect(destination.searchParams.get('studentPortalOrigin')).toBe(
    'https://student.langy.space',
  )
  expect(destination.searchParams.has('page')).toBe(false)
  expect(destination.hash).toBe('')
  render(
    <MaterialsCatalog
      materials={[
        {
          id: 'a1-03',
          code: 'A1.03',
          level: 'A1',
          title: 'Family',
          description: '',
          review: false,
          href: 'http://127.0.0.1:8851/?studentPortalOrigin=https%3A%2F%2Fstudent.langy.space#a1-03',
        },
      ]}
    />,
  )
  const link = screen.getByRole('link', { name: /Family/ })
  expect(link).toHaveAttribute('href', expect.stringContaining('#a1-03'))
  expect(link).toHaveAttribute('target', '_self')
})

it('returns deployed materials to their own portal library without lesson parameters', () => {
  expect(
    materialCatalogUrl(
      'https://teacher.staging.langy.space/interactive-materials/index.html?page=s4#a1-03',
    ),
  ).toBe('https://teacher.staging.langy.space/materiais')
  expect(
    materialCatalogUrl(
      'https://teacher.langy.space/interactive-materials/index.html#a1-03',
    ),
  ).toBe('https://teacher.langy.space/materiais')
})

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
