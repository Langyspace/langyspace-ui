import { LessonPracticePlan } from '../shared/LessonBookends'
import { content } from './B101.data'
export { LessonNotes } from '../shared/LessonNotes'
export function HomeworkSection() {
  return (
    <LessonPracticePlan
      tasks={content.homework.map(([title, description]) => ({
        title: title!,
        description: description!,
      }))}
    />
  )
}
