import { CourseLesson } from '../Course/CourseLesson'
import type { A201LessonProps } from './A201.types'
export function A201Lesson({ initialPageId }: A201LessonProps) {
  return <CourseLesson materialKey="a2-01" initialPageId={initialPageId} />
}
