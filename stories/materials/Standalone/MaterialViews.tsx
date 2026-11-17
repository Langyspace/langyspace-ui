import { lazy } from 'react'
import type { MaterialViewProps } from './MaterialApp.types'
const A101 = lazy(() =>
  import('../A101/A101Lesson').then((m) => ({ default: m.A101Lesson })),
)
const A201 = lazy(() =>
  import('../A201/A201Lesson').then((m) => ({ default: m.A201Lesson })),
)
const B101 = lazy(() =>
  import('../B101/B101Lesson').then((m) => ({ default: m.B101Lesson })),
)
const Trial = lazy(() =>
  import('../TrialA1/TrialA1Lesson').then((m) => ({
    default: m.TrialA1Lesson,
  })),
)
export function MaterialView({ materialKey }: MaterialViewProps) {
  if (materialKey === 'a1-01') return <A101 />
  if (materialKey === 'a2-01') return <A201 />
  if (materialKey === 'b1-01') return <B101 />
  return <Trial levelLabel="A1 · A2" />
}
