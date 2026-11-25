import { describe, expect, it } from 'vitest'
import { createSlideWheelIntent } from '../../src/internal/slideWheelIntent'

const wave = [1, 8, 25, 60, 45, 25, 12, 5, 2, 1]
describe('slide wheel intent across uninterrupted streams', () => {
  it.each([0.001, 1, 100])(
    'recognizes three renewed drives without quiet gaps at scale %s',
    (scale) => {
      const read = createSlideWheelIntent()
      const accepted: number[] = []
      let time = 0
      for (let gesture = 0; gesture < 3; gesture++)
        for (const delta of wave) {
          const result = read({
            deltaY: delta * scale,
            deltaMode: 0,
            timeStamp: (time += 16),
          })
          if (result) accepted.push(result)
        }
      expect(accepted).toEqual([1, 1, 1])
    },
  )
  it('does not mistake initial acceleration, long decay, equal tails or isolated spikes for another gesture', () => {
    const read = createSlideWheelIntent()
    const deltas = [
      0.1, 1, 5, 20, 90, 100, 90, 70, 50, 30, 15, 8, 4, 2, 1, 1, 1, 12, 8, 6, 8,
      10, 6, 4, 3, 2, 1,
    ]
    expect(
      deltas.flatMap(
        (deltaY, index) =>
          read({ deltaY, deltaMode: 0, timeStamp: index * 16 }) ?? [],
      ),
    ).toEqual([1])
  })
  it('accepts a tiny fresh gesture and immediate direction changes independently of the preceding peak', () => {
    const read = createSlideWheelIntent()
    expect(read({ deltaY: 1000, deltaMode: 0, timeStamp: 0 })).toBe(1)
    expect(read({ deltaY: 0.001, deltaMode: 0, timeStamp: 121 })).toBe(1)
    expect(read({ deltaY: -0.001, deltaMode: 0, timeStamp: 122 })).toBe(-1)
  })
  it.each([1, 2])(
    'treats explicit line/page wheel units as discrete steps (%s)',
    (deltaMode) => {
      const read = createSlideWheelIntent()
      expect(
        [0, 40, 80].map((timeStamp) =>
          read({ deltaY: 1, deltaMode, timeStamp }),
        ),
      ).toEqual([1, 1, 1])
    },
  )
  it('accepts repeated pixel mouse notches but groups high-frequency equal trackpad packets', () => {
    const mouse = createSlideWheelIntent(),
      pad = createSlideWheelIntent()
    expect(
      [0, 60, 120].map((timeStamp) =>
        mouse({ deltaY: 100, deltaMode: 0, timeStamp }),
      ),
    ).toEqual([1, 1, 1])
    expect(
      [0, 16, 32].map((timeStamp) =>
        pad({ deltaY: 10, deltaMode: 0, timeStamp }),
      ),
    ).toEqual([1, undefined, undefined])
  })
  it('ignores invalid/zero packets without poisoning a later gesture', () => {
    const read = createSlideWheelIntent()
    for (const deltaY of [0, NaN, Infinity])
      expect(read({ deltaY, deltaMode: 0, timeStamp: 0 })).toBeUndefined()
    expect(read({ deltaY: 1, deltaMode: 0, timeStamp: 1 })).toBe(1)
  })
})
