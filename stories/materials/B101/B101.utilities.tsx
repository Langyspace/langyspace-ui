import { bindStudentDestinations } from '../shared/studentDestinations'
import type { HomeworkDestinationProps } from '../shared/Lesson.types'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { TextareaInput } from '../../../src/components/Form/TextareaInput'
import { content, image, homeworkMessage } from './B101.data'
import * as S from './B101.styles'
export { LessonNotes } from '../shared/LessonNotes'
export function HomeworkSection({
  studentPortalOrigin,
}: HomeworkDestinationProps = {}) {
  const message = bindStudentDestinations(homeworkMessage, studentPortalOrigin)
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
      await navigator.clipboard.writeText(message)
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
            value={message}
          />
        </S.Stack>
      ) : null}
    </S.Stack>
  )
}
