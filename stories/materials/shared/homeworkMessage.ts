import type { CoursePracticeData } from '../Practice/Practice.types'
import { readStudentPortalOrigin } from '../Standalone/destinations'

/** Reuse the same trusted Student origin as the material bootstrap; never invent an activity. */
export function homeworkDestinations(
  data: CoursePracticeData,
  origin?: string,
) {
  const safeOrigin =
    origin &&
    readStudentPortalOrigin(
      new URLSearchParams({ studentPortalOrigin: origin }).toString(),
    )
  if (!safeOrigin) return undefined
  const environment = [
    'student.staging.langy.space',
    'langyspace-student-staging.web.app',
  ].includes(new URL(safeOrigin).hostname)
    ? 'staging'
    : 'production'
  if (
    !data.publishedEnvironments.includes(environment) ||
    !data.first.id ||
    !data.shadowing.id
  )
    return undefined
  const link = (kind: 'flashcards' | 'quiz' | 'shadowing', id: string) =>
    new URL(
      '/licoes?' +
        new URLSearchParams({
          tab: kind,
          [kind === 'flashcards' ? 'deck' : 'activity']: id,
        }),
      safeOrigin,
    ).href
  return {
    first: link(data.first.kind, data.first.id),
    shadowing: link('shadowing', data.shadowing.id),
  }
}
export function homeworkMessage(data: CoursePracticeData, origin?: string) {
  const links = homeworkDestinations(data, origin),
    copy = data.homeworkCopy
  if (!links || !copy) return undefined
  return `*Lição de casa — ${copy.title}*

1) ${copy.first}:
${links.first}

2) ${copy.shadowing}:
${links.shadowing}

3) ${copy.voice}`
}
