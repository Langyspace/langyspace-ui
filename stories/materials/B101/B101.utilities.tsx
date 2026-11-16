import { useEffect, useRef, useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { TextareaInput } from '../../../src/components/Form/TextareaInput'
import { content, image, homeworkMessage } from './B101.data'
import type { NotesProps } from './B101.types'
import * as S from './B101.styles'
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
export function HomeworkSection() {
  const [status, setStatus] = useState<'idle' | 'copied' | 'fallback'>('idle')
  const fallback = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    if (status === 'fallback') {
      fallback.current?.focus()
      fallback.current?.select()
    }
  }, [status])
  useEffect(() => {
    if (status !== 'copied') return
    const timer = window.setTimeout(() => setStatus('idle'), 2000)
    return () => window.clearTimeout(timer)
  }, [status])
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(homeworkMessage)
      setStatus('copied')
    } catch {
      setStatus('fallback')
    }
  }
  return (
    <S.Stack>
      {content.homework.map(([title, description], i) => (
        <S.Homework key={title}>
          {i === 0 ? <img src={image('baking')} alt="" /> : null}
          <div>
            <b>{title}</b>
            <S.Hint>{description}</S.Hint>
          </div>
        </S.Homework>
      ))}
      <S.Row>
        <Button variant="brand" onClick={() => void copy()}>
          {status === 'copied' ? 'Copied ✓' : 'Copy links'}
        </Button>
      </S.Row>
      {status === 'copied' ? (
        <S.Hint role="status">Links copied.</S.Hint>
      ) : null}
      {status === 'fallback' ? (
        <S.Stack>
          <S.Hint role="status">
            Copy the links below, or try Copy links again.
          </S.Hint>
          <TextareaInput
            ref={fallback}
            aria-label="Homework links"
            readOnly
            value={homeworkMessage}
          />
        </S.Stack>
      ) : null}
    </S.Stack>
  )
}
