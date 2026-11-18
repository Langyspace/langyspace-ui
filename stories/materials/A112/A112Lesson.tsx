import { CatalogLesson } from '../shared/CatalogLesson'
import type { CatalogLessonData } from '../shared/CatalogLesson.types'
import type { LessonProps } from '../shared/Lesson.types'
import content from './A112.content.json'
import bust_ana from '../A101/assets/bust_ana.webp'
import bust_kim from '../A101/assets/bust_kim.webp'
import x_pl_cafe from '../A108/assets/x-pl-cafe.webp'

const assets = import.meta.glob<string>('./assets/*', {
  eager: true,
  query: '?url',
  import: 'default',
})
const shared = { bust_ana, bust_kim, x_pl_cafe }

export function A112Lesson({ initialPageId }: LessonProps) {
  return (
    <CatalogLesson
      data={content as CatalogLessonData}
      assets={assets}
      shared={shared}
      initialPageId={initialPageId}
    />
  )
}
