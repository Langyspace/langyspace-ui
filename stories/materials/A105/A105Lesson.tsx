import { ReviewedLesson } from '../shared/ReviewedLesson'
import { prepareMaterialRecordings } from '../shared/prepareMaterialRecordings'
import type { ReviewedPage } from '../shared/ReviewedLesson.types'
import data from './A105.review.json'
import provenance from './audio-provenance.json'
import additions from './audio-provenance81.json'
import { MarketCase } from './MarketCase'
import { scene } from './A105.data'
import type { A105LessonProps } from './A105.types'
const assets = import.meta.glob('./assets/audio/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const recordings = prepareMaterialRecordings(
  [...provenance.items, ...additions.items],
  assets,
)
const pages = (data.pages as readonly ReviewedPage[]).map((page) =>
  page.kind === 'vocabulary'
    ? {
        ...page,
        items: page.items.map((item) => ({
          ...item,
          imageUrl: scene((item.imageUrl ?? '').replace('scene-', '')),
        })),
      }
    : page,
)
export function A105Lesson({ initialPageId, learnerName }: A105LessonProps) {
  return (
    <ReviewedLesson
      code={data.code}
      title={data.title}
      pages={pages}
      recordings={recordings}
      initialPageId={initialPageId}
      learnerName={learnerName}
      activities={{ s11: <MarketCase />, s91: <MarketCase request /> }}
      freeConversationInstruction="Talk about food you enjoy, ask about your teacher’s tastes and plan a small shopping trip"
    />
  )
}
