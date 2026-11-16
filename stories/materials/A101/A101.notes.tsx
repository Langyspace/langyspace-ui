import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { StyleSheetManager } from 'styled-components'
import { GlobalStyles } from '../../../src/foundations/theme/GlobalStyles'
import { Button } from '../../../src/components/Button/Button'
import { lesson } from './A101.data'
import * as Styled from './A101.styles'
import type { TeacherNotesProps, NotesContentProps } from './A101.notes.types'
export function NotesContent({ pageId }: NotesContentProps) {
  const [started, setStarted] = useState<number>()
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    if (started === undefined) return
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [started])
  const number = Number(pageId.slice(1))
  const base =
    number >= 21 && number <= 26
      ? 2
      : number >= 51 && number <= 56
        ? 5
        : number === 71 || number === 72
          ? 7
          : number
  const note = lesson.NOTES[String(base) as keyof typeof lesson.NOTES]
  const steps =
    base === 9 && note
      ? [
          note.passos[0],
          'Toque o áudio pela segunda vez: a transcrição aparece automaticamente. Leiam juntas uma vez e confirmem as respostas.',
        ]
      : note?.passos
  const seconds =
    started === undefined ? 0 : Math.max(0, Math.floor((now - started) / 1000))
  return (
    <Styled.Notes>
      <h1>Notas da professora · A1.01</h1>
      <p>
        Tempo de aula: {String(Math.floor(seconds / 60)).padStart(2, '0')}:
        {String(seconds % 60).padStart(2, '0')}
      </p>
      <Button
        size="sm"
        onClick={() => {
          setStarted(Date.now())
          setNow(Date.now())
        }}
      >
        {started === undefined ? 'Iniciar relógio' : 'Reiniciar relógio'}
      </Button>
      {note ? (
        <>
          <h2>{note.pg}</h2>
          <p>{note.min}</p>
          <p>{note.tela}</p>
          <ol>
            {steps?.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <h3>Se travar</h3>
          <p>{note.trava}</p>
          <h3>Correção</h3>
          <p>{note.corr}</p>
          <h3>Tempo</h3>
          <p>{note.tempo}</p>
        </>
      ) : (
        <p>Converse e siga a orientação desta página.</p>
      )}
    </Styled.Notes>
  )
}
export function TeacherNotes({ pageId }: TeacherNotesProps) {
  const [popup, setPopup] = useState<Window>()
  const [blocked, setBlocked] = useState(false)
  useEffect(() => {
    if (!popup) return
    const close = () => setPopup(undefined)
    popup.addEventListener('pagehide', close)
    return () => {
      popup.removeEventListener('pagehide', close)
      popup.close()
    }
  }, [popup])
  return (
    <>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => {
          if (popup && !popup.closed) {
            popup.focus()
            return
          }
          const opened = window.open(
            '',
            'langy-a101-teacher-notes',
            'popup,width=480,height=720',
          )
          if (!opened) {
            setBlocked(true)
            return
          }
          opened.document.title = 'Notas da professora · A1.01'
          opened.document.documentElement.lang = 'pt-BR'
          setBlocked(false)
          setPopup(opened)
        }}
      >
        Notas da professora
      </Button>
      {blocked ? (
        <small role="status">Permita abrir a janela das notas.</small>
      ) : null}
      {popup && !popup.closed
        ? createPortal(
            <StyleSheetManager target={popup.document.head}>
              <>
                <GlobalStyles />
                <NotesContent pageId={pageId} />
              </>
            </StyleSheetManager>,
            popup.document.body,
          )
        : null}
    </>
  )
}
