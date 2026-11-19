import { content } from './B101.data'
import * as S from './B101.styles'
export { LessonNotes } from '../shared/LessonNotes'
export function HomeworkSection() {
  return (
    <S.Stack>
      {content.homework.map(([title, description]) => (
        <S.Homework key={title}>
          <div>
            <b>{title}</b>
            <S.Hint>{description}</S.Hint>
          </div>
        </S.Homework>
      ))}
    </S.Stack>
  )
}
