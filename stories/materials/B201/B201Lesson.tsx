import { CourseLesson } from '../Course/CourseLesson'
import type { LessonProps } from '../shared/Lesson.types'
export function B201Lesson({ initialPageId }: LessonProps) {
  return <CourseLesson materialKey="b2-01" initialPageId={initialPageId} />
}
