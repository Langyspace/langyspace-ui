import { prepareMaterialRecordings } from '../shared/prepareMaterialRecordings'
import { ReviewedLesson } from '../shared/ReviewedLesson'
import type { ReviewedPage } from '../shared/ReviewedLesson.types'
import data from './A103.review.json'
import provenance from './audio-provenance.json'
import type { A103LessonProps } from './A103.types'

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
  if ('image' in page && page.image)
    return { ...page, image: { ...page.image, src: image(page.image.src) } }
  return page
})

export function A103Lesson({ initialPageId, learnerName }: A103LessonProps) {
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
