import { bindStudentDestinations } from './studentDestinations'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { TextareaInput } from '../../../src/components/Form/TextareaInput'
import * as S from './Lesson.styles'
export function LessonHomework({
  lesson,
  items,
  image,
  studentPortalOrigin,
}: {
  lesson: string
  items: readonly string[][]
  image?: string
  studentPortalOrigin?: string
}) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'fallback'>('idle'),
    input = useRef<HTMLTextAreaElement>(null)
  const authoredMessage =
    `Lição de casa da aula ${lesson}\n` +
    items
      .map(([title, , url, min], i) => `${i + 1}. ${title} · ${min} · ${url}`)
      .join('\n')
  const message = bindStudentDestinations(authoredMessage, studentPortalOrigin)
  useEffect(() => {
    if (status === 'fallback') {
      input.current?.focus()
      input.current?.select()
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
      {items.map(([title, description], i) => (
        <S.Homework key={title}>
          {i === 0 && image ? <img src={image} alt="" /> : null}
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
        <S.Hint role="status">Links copiados.</S.Hint>
      ) : null}
      {status === 'fallback' ? (
        <S.Stack>
          <S.Hint role="status">
            Copie os links abaixo ou tente Copy links novamente.
          </S.Hint>
          <TextareaInput
            ref={input}
            aria-label="Homework links"
            readOnly
            value={message}
          />
        </S.Stack>
      ) : null}
    </S.Stack>
  )
}
