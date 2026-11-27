import type { SlideDeckPage } from '../../../src/components/Slide/SlideDeck.types'
import { LessonOpening } from './LessonBookends'
import { hasLessonOpeningReview } from './lessonOpeningPolicy.data'
export { hasLessonOpeningReview } from './lessonOpeningPolicy.data'

/** Keep the authored activity and its ID; add a separate cover only when no review exists. */
export function withLessonOpeningPageIds(
  materialKey: string,
  ids: readonly string[],
): string[] {
  if (hasLessonOpeningReview(materialKey) || ids[0] === 'cover') return [...ids]
  return ['cover', ...ids.filter((id) => id !== 'cover')]
}
export function withLessonOpeningPages(
  materialKey: string,
  pages: readonly SlideDeckPage[],
): readonly SlideDeckPage[] {
  if (hasLessonOpeningReview(materialKey) || pages[0]?.id === 'cover')
    return pages
  return [
    {
      id: 'cover',
      label: 'Lesson cover',
      content: <LessonOpening materialKey={materialKey} />,
    },
    ...pages.filter((page) => page.id !== 'cover'),
  ]
}
