import { ReviewedLesson } from '../shared/ReviewedLesson'
import type {
  ReviewedPage,
  ReviewedClipRecord,
} from '../shared/ReviewedLesson.types'
import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'
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
const recordings: readonly PreparedRecording[] = (
  provenance.items as readonly ReviewedClipRecord[]
).flatMap((clip) => {
  const src = audio['./' + clip.file]
  return src ? [{ id: clip.id, text: clip.text, src }] : []
})
const pages = (data.pages as readonly ReviewedPage[]).map((page) => {
  if (page.kind === 'vocabulary')
    return {
      ...page,
      items: page.items.map((item) => ({
        ...item,
        imageUrl: image(item.imageUrl ?? ''),
      })),
    }
  if (
    (page.kind === 'roleplay' ||
      page.kind === 'scene' ||
      page.kind === 'introductions') &&
    page.image
  )
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
