import { ReviewedLesson } from '../shared/ReviewedLesson'
import type { ReviewedPage } from '../shared/ReviewedLesson.types'
import { raj } from '../shared/characterPortraits'
import { FeedbackActivity } from './FeedbackActivity'
import data from './C101.review.json'
import dialogueProvenance from './audio-provenance.json'
import vocabularyProvenance from './vocabulary-audio-provenance.json'
import additions from './audio-provenance79.json'
import type { C101LessonProps } from './C101.types'

const images = import.meta.glob('./assets/*.webp', {
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
  ...dialogueProvenance.items,
  ...vocabularyProvenance.items,
  ...additions.items,
].map((item) => {
  const src = audio['./' + item.file]
  if (!src) throw new Error(`Missing prepared C1 recording: ${item.id}`)
  return { id: item.id.replace(/^c101-D6-/, 'D6.'), text: item.text, src }
})
const pages = (data.pages as readonly ReviewedPage[]).map((page) => {
  if (page.kind === 'vocabulary')
    return {
      ...page,
      items: page.items.map((item) => ({
        ...item,
        imageUrl: images[`./assets/${item.imageUrl}.webp`],
      })),
    }
  if (page.kind === 'listening')
    return { ...page, contact: { name: 'Raj', avatarUrl: raj } }
  return page
})
export const c101PageIds = pages.map((page) => page.id)
export function C101Lesson({ initialPageId }: C101LessonProps) {
  return (
    <ReviewedLesson
      code={data.code}
      title={data.title}
      pages={pages}
      recordings={recordings}
      initialPageId={initialPageId}
      notesStorageKey="langy-notes:c1-01"
      activities={{ s11: <FeedbackActivity /> }}
      freeConversationInstruction="How would you tell a colleague that their feedback sounded harsher than they intended? Compare wording and how it might land"
    />
  )
}
