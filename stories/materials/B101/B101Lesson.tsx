import { CourseLesson } from '../Course/CourseLesson'
import type { B101LessonProps } from './B101.types'
export function B101Lesson({ initialPageId }: B101LessonProps) {
  return <CourseLesson materialKey="b1-01" initialPageId={initialPageId} />
}
