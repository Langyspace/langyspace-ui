import { lazy, Suspense } from 'react'
import { ReviewedLesson } from '../shared/ReviewedLesson'
import type {
  ReviewedActivityContext,
  ReviewedPage,
} from '../shared/ReviewedLesson.types'
import { CourseActivity } from './CourseActivity'
import type { CourseLessonProps, PreparedCourseData } from './Course.types'
import { characterPortrait } from '../shared/characterPortraits'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'

function PreparedLesson({
  prepared,
  initialPageId,
  learnerName,
}: Omit<CourseLessonProps, 'materialKey'> & { prepared: PreparedCourseData }) {
  const { data, recordings, images } = prepared
  const image = (name: string) => {
    const result = images[name]
    if (!result) throw new Error(`Missing prepared scene: ${name}`)
    return result
  }
  const pages = data.pages.map((page) => {
    const activity = data.activities[page.id]
    const identified =
      page.kind === 'listening'
        ? {
            ...page,
            contact: {
              name: page.contact?.name ?? 'Kim',
              avatarUrl: characterPortrait(page.contact?.name ?? 'Kim'),
            },
          }
        : page
    const media =
      identified.kind === 'vocabulary'
        ? {
            ...identified,
            items: identified.items.map((item) => ({
              ...item,
              imageUrl: item.imageUrl ? image(item.imageUrl) : undefined,
            })),
          }
        : 'image' in identified && identified.image
          ? {
              ...identified,
              image: { ...identified.image, src: image(identified.image.src) },
            }
          : identified
    return activity?.type === 'map' && !activity.questions.length
      ? { ...media, mediaAspectRatio: 1.5 }
      : media
  }) as readonly ReviewedPage[]
  const activities = Object.fromEntries(
    Object.entries(data.activities).map(([id, activity]) => [
      id,
      ({ speech }: ReviewedActivityContext) => (
        <CourseActivity
          key={id}
          activity={activity}
          image={activity.image ? image(activity.image) : undefined}
          onPlayPlace={(clipId, text) => speech.speak([{ id: clipId, text }])}
        />
      ),
    ]),
  )
  return (
    <ReviewedLesson
      code={data.code}
      title={data.title}
      pages={pages}
      recordings={recordings}
      initialPageId={initialPageId}
      learnerName={learnerName}
      activities={activities}
      notesStorageKey={data.notesStorageKey}
      freeConversationInstruction={data.freeConversationInstruction}
    />
  )
}
const loaders = import.meta.glob<{ default: PreparedCourseData }>(
  './lessons/*.module.ts',
)
const views = Object.fromEntries(
  Object.entries(loaders).map(([path, load]) => [
    path.split('/').at(-1)!.replace('.module.ts', ''),
    lazy(async () => {
      const { default: prepared } = await load()
      return {
        default: (props: Omit<CourseLessonProps, 'materialKey'>) => (
          <PreparedLesson prepared={prepared} {...props} />
        ),
      }
    }),
  ]),
)

/** One lesson loads its own pictures and active recordings; provenance is not a runtime payload. */
export function CourseLesson({ materialKey, ...props }: CourseLessonProps) {
  const View = views[materialKey]
  if (!View) throw new Error(`Missing authored lesson: ${materialKey}`)
  return (
    <Suspense
      fallback={<Common.Hint role="status">Loading lesson…</Common.Hint>}
    >
      <View {...props} />
    </Suspense>
  )
}
