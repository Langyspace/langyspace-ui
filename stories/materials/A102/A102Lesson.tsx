import { ReviewedLesson } from '../shared/ReviewedLesson'
import { prepareMaterialRecordings } from '../shared/prepareMaterialRecordings'
import type { ReviewedPage } from '../shared/ReviewedLesson.types'
import {
  NumberReference,
  AlphabetReference,
  CallPractice,
  ContactPractice,
} from './A102.sections'
import type { A102LessonProps } from './A102.types'
import data from './A102.review.json'
import provenance from './audio-provenance.json'
import additions from './audio-provenance80.json'
import { call } from './A102.data'

const audio = import.meta.glob('./assets/audio/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const recordings = prepareMaterialRecordings(
  [...provenance.items, ...additions.items],
  audio,
)
const numberUpdate = additions.items.find((item) => item.id === 'C80.4')!
const checks = [
  {
    ...call[0],
    caption: 'Hi, Ana! It’s Kim. I’m checking your contact details',
  },
  call[2],
  { id: numberUpdate.id, text: numberUpdate.text },
]
export function A102Lesson({ initialPageId, learnerName }: A102LessonProps) {
  return (
    <ReviewedLesson
      code={data.code}
      title={data.title}
      pages={data.pages as readonly ReviewedPage[]}
      recordings={recordings}
      initialPageId={initialPageId}
      learnerName={learnerName}
      activities={{
        s2: ({ speech }) => <NumberReference speech={speech} />,
        s6: ({ speech }) => <AlphabetReference speech={speech} />,
        s13: <ContactPractice />,
        s14: ({ active, speech }) => (
          <CallPractice active={active} speech={speech} lines={checks} />
        ),
      }}
      freeConversationInstruction="Exchange contact details, ask your own questions and check what you hear. You can use made-up details"
    />
  )
}
