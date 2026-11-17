import { useEffect, useRef, useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { TextareaInput } from '../../../src/components/Form/TextareaInput'
import type { NotesProps } from './Lesson.types'
import * as S from './Lesson.styles'
export function LessonNotes({ open, onClose }: NotesProps) {
  const [text, setText] = useState(''),
    input = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    if (open) input.current?.focus()
  }, [open])
  if (!open) return null
  return (
    <S.Notes
      role="dialog"
      aria-label="Notes"
      aria-modal={false}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          e.stopPropagation()
          onClose()
        }
      }}
    >
      <S.Row>
        <b>✦ Notes</b>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            setText('')
            input.current?.focus()
          }}
        >
          Clear
        </Button>
        <Button
          size="sm"
          variant="secondary"
          aria-label="Close notes"
          onClick={onClose}
        >
          Close
        </Button>
      </S.Row>
      <TextareaInput
        ref={input}
        aria-label="Lesson notes"
        placeholder="Words, sentences, things to remember from this class…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </S.Notes>
  )
}
