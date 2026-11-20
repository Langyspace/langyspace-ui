import { prepareMaterialRecordings } from '../shared/prepareMaterialRecordings'
import { ReviewedLesson } from '../shared/ReviewedLesson'
import type { ReviewedPage } from '../shared/ReviewedLesson.types'
import data from './A106.review.json'
import provenance from './audio-provenance.json'
import type { A106LessonProps } from './A106.types'

const images = import.meta.glob('./assets/*.{webp,png}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const audio = import.meta.glob('./assets/audio/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const image = (id: string) =>
  images[`./assets/${id}.webp`] ?? images[`./assets/${id}.png`] ?? ''
const recordings = prepareMaterialRecordings(provenance.items, audio)
const pages = (data.pages as readonly ReviewedPage[]).map((page) => {
  if (page.kind === 'vocabulary')
    return {
      ...page,
      items: page.items.map((item) => ({
        ...item,
        imageUrl: image(item.imageUrl ?? ''),
      })),
    }
  if (page.kind === 'roleplay' && page.image)
    return { ...page, image: { ...page.image, src: image(page.image.src) } }
  return page
})

export function A106Lesson({ initialPageId, learnerName }: A106LessonProps) {
  return (
    <ReviewedLesson
      code={data.code}
      title={data.title}
      pages={pages}
      recordings={recordings}
      initialPageId={initialPageId}
      learnerName={learnerName}
    />
  )
}
