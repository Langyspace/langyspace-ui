import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { MaterialTheme } from '../../../stories/materials/shared/MaterialTheme'
import airport from '../../../stories/materials/Course/lessons/a1-07.json'
import cafe from '../../../stories/materials/Course/lessons/a1-10.json'
import type { CourseLessonData } from '../../../stories/materials/Course/Course.types'

// Measured connected silhouette bounds at alpha >=64 in the unchanged 1200×800 atlases.
// Lower-alpha fringe/noise is not a reliable silhouette boundary.
const fixtures = [
  {
    data: airport,
    bounds: [
      [125, 162, 370, 356],
      [526, 112, 666, 373],
      [789, 176, 1110, 310],
      [92, 492, 373, 683],
      [451, 504, 739, 675],
      [814, 484, 1092, 681],
    ],
  },
  {
    data: cafe,
    bounds: [
      [83, 109, 366, 343],
      [466, 109, 756, 346],
      [875, 101, 1056, 346],
      [130, 447, 297, 694],
      [447, 462, 740, 674],
      [862, 443, 1072, 682],
    ],
  },
]

it.each(fixtures)(
  'centres complete, separate silhouettes in square class frames for $data.code',
  ({ data, bounds }) => {
    const page = (data as CourseLessonData).pages.find((p) => p.id === 's2')!
    if (page.kind !== 'vocabulary') throw Error('Expected vocabulary')
    expect(page.imageAspectRatio).toBe(1)
    expect(page.items).toHaveLength(6)
    page.items.forEach((item, index) => {
      const r = item.imageRegion!
      const width = (r.sourceAspectRatio * r.columnSpan!) / r.columns
      const height = r.rowSpan! / r.rows
      expect(width / height).toBe(1)
      expect(r.column).toBeGreaterThanOrEqual(0)
      expect(r.row).toBeGreaterThanOrEqual(0)
      expect(r.column + r.columnSpan!).toBeLessThanOrEqual(r.columns)
      expect(r.row + r.rowSpan!).toBeLessThanOrEqual(r.rows)
      const [left, top, right, bottom] = bounds[index]!
      expect(r.column).toBeLessThan(left!)
      expect(r.row).toBeLessThan(top!)
      expect(r.column + r.columnSpan!).toBeGreaterThan(right!)
      expect(r.row + r.rowSpan!).toBeGreaterThan(bottom!)
      expect(
        Math.abs(r.column + r.columnSpan! / 2 - (left! + right!) / 2),
      ).toBeLessThanOrEqual(1)
      expect(
        Math.abs(r.row + r.rowSpan! / 2 - (top! + bottom!) / 2),
      ).toBeLessThanOrEqual(1)
      bounds.forEach(([x0, y0, x1, y1], other) => {
        if (other === index) return
        expect(
          r.column + r.columnSpan! <= x0! ||
            r.row + r.rowSpan! <= y0! ||
            r.column >= x1! ||
            r.row >= y1!,
        ).toBe(true)
      })
    })
    const reveal = vi.fn(),
      play = vi.fn()
    render(
      <MaterialTheme>
        <VocabularyGrid
          items={page.items}
          imageVariant="scene"
          imageFit="contain"
          imageAspectRatio={page.imageAspectRatio}
          density="regular"
          surface="plain"
          revealedIds={[]}
          onReveal={reveal}
          onPlay={play}
        />
      </MaterialTheme>,
    )
    const cards = screen.getAllByRole('button')
    expect(cards).toHaveLength(6)
    cards.forEach((card, index) => {
      fireEvent.click(card.firstElementChild!)
      expect(reveal).toHaveBeenNthCalledWith(index + 1, page.items[index]!.id)
      expect(play).toHaveBeenNthCalledWith(index + 1, page.items[index]!.id)
    })
  },
)
