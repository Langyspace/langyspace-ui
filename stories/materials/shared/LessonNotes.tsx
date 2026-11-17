import { useState } from 'react'
import { SlideNotes } from '../../../src/components/Slide/SlideNotes'
import type { NotesProps } from './Lesson.types'
function PersistentNotes({ open, onClose, storageKey }: NotesProps) {
  const [text, setText] = useState(() => {
    try {
      return window.localStorage.getItem(storageKey) ?? ''
    } catch {
      return ''
    }
  })
  return (
    <SlideNotes
      open={open}
      value={text}
      onClose={onClose}
      onChange={(value) => {
        setText(value)
        try {
          window.localStorage.setItem(storageKey, value)
        } catch {
          /* A blocked browser store must never prevent editing. */
        }
      }}
    />
  )
}
export function LessonNotes(props: NotesProps) {
  return <PersistentNotes key={props.storageKey} {...props} />
}
