import { ReviewedLesson } from '../shared/ReviewedLesson'
import type { ReviewedPage } from '../shared/ReviewedLesson.types'
import { MeetSomeoneActivity } from './MeetSomeoneActivity'
import type { A101LessonProps } from './A101.types'
import data from './A101.review.json'
import provenance from './audio-provenance.json'
import additions from './audio-provenance80.json'
import restored from './audio-provenance94.json'

const images = import.meta.glob('./assets/*.{webp,png,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const audio = import.meta.glob('./assets/**/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const recordings = [
  ...provenance.items,
  ...additions.items,
  ...restored.items,
].map((clip) => {
  const src = audio['./' + clip.file]
  if (!src) throw new Error(`Missing prepared A1.01 audio: ${clip.id}`)
  return { id: clip.id, text: clip.text, src }
})
const preparedImage = (name: string) => {
  const src = images[`./assets/${name}.webp`] ?? images[`./assets/${name}.svg`]
  if (!src) throw new Error(`Missing prepared A1.01 picture: ${name}`)
  return src
}
const pages = (data.pages as readonly ReviewedPage[]).map((page) =>
  page.kind === 'vocabulary'
    ? {
        ...page,
        items: page.items.map((item) => {
          const id = item.imageUrl ?? ''
          return { ...item, imageUrl: preparedImage(id) }
        }),
      }
    : page.kind === 'image-choice'
      ? {
          ...page,
          image: {
            ...page.image,
            src: preparedImage(page.image.src),
          },
        }
      : page,
)
export function A101Lesson({ initialPageId, learnerName }: A101LessonProps) {
  return (
    <ReviewedLesson
      code={data.code}
      title={data.title}
      pages={pages}
      recordings={recordings}
      initialPageId={initialPageId}
      learnerName={learnerName}
      notesStorageKey="langy-notes:a1-01"
      activities={{ s10: <MeetSomeoneActivity /> }}
      freeConversationInstruction="Get to know each other: introduce yourself, ask about your teacher and react to her answers"
    />
  )
}
