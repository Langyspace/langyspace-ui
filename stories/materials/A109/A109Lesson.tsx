import { CatalogLesson } from '../shared/CatalogLesson'
import type { CatalogLessonData } from '../shared/CatalogLesson.types'
import type { LessonProps } from '../shared/Lesson.types'
import content from './A109.content.json'
import bust_ana from '../A101/assets/bust_ana.webp'
import bust_kim from '../A101/assets/bust_kim.webp'

const assets = import.meta.glob<string>('./assets/*', {
  eager: true,
  query: '?url',
  import: 'default',
})
const shared = { bust_ana, bust_kim }

export function A109Lesson({ initialPageId }: LessonProps) {
  return (
    <CatalogLesson
      data={content as CatalogLessonData}
      assets={assets}
      shared={shared}
      initialPageId={initialPageId}
    />
  )
}
