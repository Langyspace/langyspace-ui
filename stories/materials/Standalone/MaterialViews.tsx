import { lazy } from 'react'
const Course = lazy(() =>
  import('../Course/CourseLesson').then((m) => ({ default: m.CourseLesson })),
)
import type { MaterialViewProps } from './MaterialApp.types'
const InfluencerRoutine = lazy(() =>
  import('../InfluencerRoutine/InfluencerRoutineLesson').then((m) => ({
    default: m.InfluencerRoutineLesson,
  })),
)
const A101 = lazy(() =>
  import('../A101/A101Lesson').then((m) => ({ default: m.A101Lesson })),
)
const A102 = lazy(() =>
  import('../A102/A102Lesson').then((m) => ({ default: m.A102Lesson })),
)
const A103 = lazy(() =>
  import('../A103/A103Lesson').then((m) => ({ default: m.A103Lesson })),
)
const A104 = lazy(() =>
  import('../A104/A104Lesson').then((m) => ({ default: m.A104Lesson })),
)
const A105 = lazy(() =>
  import('../A105/A105Lesson').then((m) => ({ default: m.A105Lesson })),
)
const A106 = lazy(() =>
  import('../A106/A106Lesson').then((m) => ({ default: m.A106Lesson })),
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
const C101 = lazy(() =>
  import('../C101/C101Lesson').then((m) => ({ default: m.C101Lesson })),
)
const Frontend = lazy(() =>
  import('../Frontend/FrontendLesson').then((m) => ({
    default: m.FrontendLesson,
  })),
)
const Trial = lazy(() =>
  import('../TrialA1/TrialA1Lesson').then((m) => ({
    default: m.TrialA1Lesson,
  })),
)
const TrialB1 = lazy(() =>
  import('../TrialB1/TrialB1Lesson').then((m) => ({
    default: m.TrialB1Lesson,
  })),
)
const TrialB2 = lazy(() =>
  import('../TrialB2/TrialB2Lesson').then((m) => ({
    default: m.TrialB2Lesson,
  })),
)
export function MaterialView({
  materialKey,
  studentPortalOrigin,
}: MaterialViewProps) {
  if (materialKey === 'extra-influencer-routine') return <InfluencerRoutine />
  if (materialKey === 'trial-b1') return <TrialB1 />
  if (materialKey === 'trial-b2') return <TrialB2 />
  if (materialKey === 'tema-frontend')
    return <Frontend studentPortalOrigin={studentPortalOrigin} />
  if (materialKey === 'a1-01')
    return <A101 studentPortalOrigin={studentPortalOrigin} />
  if (materialKey === 'a1-02')
    return <A102 studentPortalOrigin={studentPortalOrigin} />
  if (materialKey === 'a1-03')
    return <A103 studentPortalOrigin={studentPortalOrigin} />
  if (materialKey === 'a1-04')
    return <A104 studentPortalOrigin={studentPortalOrigin} />
  if (materialKey === 'a1-05')
    return <A105 studentPortalOrigin={studentPortalOrigin} />
  if (materialKey === 'a1-06')
    return <A106 studentPortalOrigin={studentPortalOrigin} />
  if (materialKey === 'a2-01')
    return <A201 studentPortalOrigin={studentPortalOrigin} />
  if (materialKey === 'b1-01')
    return <B101 studentPortalOrigin={studentPortalOrigin} />
  if (materialKey === 'b2-01')
    return <B201 studentPortalOrigin={studentPortalOrigin} />
  if (materialKey === 'c1-01')
    return <C101 studentPortalOrigin={studentPortalOrigin} />
  if (/^(a1|a2|b1|b2|c1)-(0[1-9]|1[0-2])$/.test(materialKey))
    return <Course materialKey={materialKey} />
  return <Trial levelLabel="A1 · A2" />
}
