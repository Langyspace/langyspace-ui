/** Content spans, independent of the number of cards/fields inside an exercise. */
export type SlideColumns = 1 | 2 | 3

export function slideColumnWidth(
  sizes: {
    focusedWidth: string
    wideWidth: string
    introductionWidth: string
  },
  columns: SlideColumns,
) {
  return columns === 1
    ? sizes.focusedWidth
    : columns === 2
      ? sizes.wideWidth
      : sizes.introductionWidth
}

/** A conversation keeps its single-column cap while the adjacent region takes the remainder. */
export function slidePairedTracks(
  sizes: Parameters<typeof slideColumnWidth>[0],
) {
  return `minmax(0, min(${slideColumnWidth(sizes, 1)}, 60%)) minmax(0, 1fr)`
}
