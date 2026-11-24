import { PopupWarning } from './LessonNotes.styles'
import type { NotesProps } from './Lesson.types'
/** Teacher content lives only in its protected popup; previews mount their own event root on click. */
export function LessonNotes({ error }: NotesProps) {
  return error ? <PopupWarning role="status">{error}</PopupWarning> : null
}
