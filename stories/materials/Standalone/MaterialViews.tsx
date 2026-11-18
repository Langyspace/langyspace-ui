import { lazy } from 'react'
import type { MaterialViewProps } from './MaterialApp.types'
const A101 = lazy(() =>
  import('../A101/A101Lesson').then((m) => ({ default: m.A101Lesson })),
)
const A107 = lazy(() =>
  import('../A107/A107Lesson').then((m) => ({ default: m.A107Lesson })),
)
const A108 = lazy(() =>
  import('../A108/A108Lesson').then((m) => ({ default: m.A108Lesson })),
)
const A201 = lazy(() =>
  import('../A201/A201Lesson').then((m) => ({ default: m.A201Lesson })),
)
const B101 = lazy(() =>
  import('../B101/B101Lesson').then((m) => ({ default: m.B101Lesson })),
)
const B201 = lazy(() =>
  import('../B201/B201Lesson').then((m) => ({ default: m.B201Lesson })),
)
const Trial = lazy(() =>
  import('../TrialA1/TrialA1Lesson').then((m) => ({
    default: m.TrialA1Lesson,
  })),
)
export function MaterialView({
  materialKey,
  studentPortalOrigin,
}: MaterialViewProps) {
  if (materialKey === 'a1-01')
    return <A101 studentPortalOrigin={studentPortalOrigin} />
  if (materialKey === 'a1-07')
    return <A107 studentPortalOrigin={studentPortalOrigin} />
  if (materialKey === 'a1-08') return <A108 />
  if (materialKey === 'a2-01')
    return <A201 studentPortalOrigin={studentPortalOrigin} />
  if (materialKey === 'b1-01')
    return <B101 studentPortalOrigin={studentPortalOrigin} />
  if (materialKey === 'b2-01')
    return <B201 studentPortalOrigin={studentPortalOrigin} />
  return <Trial levelLabel="A1 · A2" />
}
