import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { MaterialTheme } from '../../../stories/materials/shared/MaterialTheme'
import type { CourseLessonData } from '../../../stories/materials/Course/Course.types'
import clothes from '../../../stories/materials/Course/lessons/a1-11.json'
import turningPoint from '../../../stories/materials/Course/lessons/b2-01.json'

it('reveals and plays an independent illustration from the whole card, preserving its audio binding', () => {
  const page = (clothes as CourseLessonData).pages.find((p) => p.id === 's2')!
  if (page.kind !== 'vocabulary' || !('items' in page))
    throw Error('Expected vocabulary cards')
  const reveal = vi.fn(),
    play = vi.fn()
  render(
    <MaterialTheme>
      <VocabularyGrid
        items={page.items}
        revealedIds={[]}
        revealVariant="tooltip"
        onReveal={reveal}
        onPlay={play}
      />
    </MaterialTheme>,
  )
  const shirt = screen.getByRole('button', { name: /1: T-shirt$/ })
  fireEvent.click(shirt.firstElementChild!)
  expect(reveal).toHaveBeenCalledExactlyOnceWith('A111-V81.0')
  expect(play).toHaveBeenCalledExactlyOnceWith('A111-V81.0')
  expect(page.items[0]).toMatchObject({
    audioId: 'A111-FS81.0',
    audioText: 'T-shirt. This T-shirt is green.',
  })
  expect(screen.getAllByRole('button')).toHaveLength(6)
  expect(screen.queryByRole('img')).toBeNull()
})

it('keeps the mixed seven-item atlas regions separate instead of treating it as a three-column sheet', () => {
  const page = (turningPoint as CourseLessonData).pages.find(
    (p) => p.id === 's2',
  )!
  if (page.kind !== 'vocabulary' || !('items' in page))
    throw Error('Expected vocabulary cards')
  expect(page.items).toHaveLength(7)
  expect(page.items[3]!.imageRegion).toMatchObject({
    columns: 1280,
    rows: 721,
    column: 945,
    row: 0,
    columnSpan: 335,
    rowSpan: 360,
  })
  expect(page.items[4]!.imageRegion).toMatchObject({
    column: 0,
    row: 360,
    columnSpan: 427,
    rowSpan: 361,
  })
  expect(page.items[6]!.imageRegion).toMatchObject({
    column: 853,
    row: 360,
    columnSpan: 427,
    rowSpan: 361,
  })
})
