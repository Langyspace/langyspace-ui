import type { NotesTriggerProps } from './Lesson.types'
import { Trigger } from './LessonNotes.styles'
export function LessonNotesTrigger({ open, onClick, ref }: NotesTriggerProps) {
  return (
    <Trigger
      ref={ref}
      variant="secondary"
      data-window-open={open || undefined}
      aria-label="Notes, abrir em uma janela separada"
      onClick={onClick}
      iconStart={
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      }
    >
      Notes
    </Trigger>
  )
}
