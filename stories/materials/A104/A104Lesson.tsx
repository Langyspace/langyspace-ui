import { prepareMaterialRecordings } from '../shared/prepareMaterialRecordings'
import { ReviewedLesson } from '../shared/ReviewedLesson'
import type { ReviewedPage } from '../shared/ReviewedLesson.types'
import data from './A104.review.json'
import provenance from './audio-provenance.json'
import additions from './audio-provenance79.json'
import { AvailabilityActivity } from './AvailabilityActivity'
import type { A104LessonProps } from './A104.types'

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
const recordings = prepareMaterialRecordings(
  [...provenance.items, ...additions.items],
  audio,
)
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

export function A104Lesson({ initialPageId, learnerName }: A104LessonProps) {
  return (
    <ReviewedLesson
      code={data.code}
      title={data.title}
      pages={pages}
      recordings={recordings}
      initialPageId={initialPageId}
      learnerName={learnerName}
      activities={{ s11: <AvailabilityActivity /> }}
      freeConversationInstruction="What do you do after breakfast? Compare your days and find a time to do something together"
    />
  )
}
