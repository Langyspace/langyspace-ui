import { LessonHomeworkGallery } from '../shared/LessonHomeworkGallery'

/** Uses the same prepared practice and Student renderers as every lesson closing. */
export function RoutineHomework({ active }: { active: boolean }) {
  return (
    <LessonHomeworkGallery
      materialKey="extra-influencer-routine"
      active={active}
    />
  )
}
