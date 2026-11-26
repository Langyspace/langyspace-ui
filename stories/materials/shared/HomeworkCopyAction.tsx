import { useEffect, useRef, useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { Dialog } from '../../../src/components/Dialog/Dialog'
import { TextareaInput } from '../../../src/components/Form/TextareaInput'
import type { HomeworkCopyActionProps } from './HomeworkCopyAction.types'
import * as S from './LessonHomeworkGallery.styles'

/** One teacher action copies the whole assignment; it never sends a WhatsApp message. */
export function HomeworkCopyAction({
  message,
  active,
}: HomeworkCopyActionProps) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'manual'>('idle')
  const field = useRef<HTMLTextAreaElement>(null),
    button = useRef<HTMLButtonElement>(null),
    revision = useRef(0)
  useEffect(() => {
    revision.current++
    setStatus('idle')
    return () => {
      revision.current++
    }
  }, [message, active])
  useEffect(() => {
    if (status !== 'copied') return
    const timer = window.setTimeout(() => setStatus('idle'), 2500)
    return () => window.clearTimeout(timer)
  }, [status])
  const copy = async () => {
    if (!message || !active) return
    const request = ++revision.current
    try {
      await navigator.clipboard.writeText(message)
      if (request === revision.current) setStatus('copied')
    } catch {
      if (request === revision.current) setStatus('manual')
    }
  }
  return (
    <>
      <S.Footer>
        <S.CopyStatus role="status" aria-live="polite" aria-atomic="true">
          {active && status === 'copied' ? 'Dever de casa copiado' : ''}
        </S.CopyStatus>
        <Button
          ref={button}
          variant="brand"
          size="sm"
          disabled={!message}
          title={
            active && status === 'copied'
              ? 'Dever de casa copiado'
              : message
                ? 'Copiar as três tarefas para enviar pelo WhatsApp'
                : 'Este dever ainda não está disponível para envio'
          }
          onClick={() => void copy()}
          iconStart={
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d={
                  active && status === 'copied'
                    ? 'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4Z'
                    : 'M7 7h13v15H7V7Zm2 2v11h9V9H9ZM3 2h13v3H5v13H3V2Z'
                }
              />
            </svg>
          }
        >
          Copy homework
        </Button>
      </S.Footer>
      <Dialog
        open={status === 'manual' && active}
        title="Copiar lição de casa"
        description="O navegador não permitiu copiar automaticamente. Selecione o texto abaixo e copie"
        closeLabel="Fechar"
        onClose={() => setStatus('idle')}
        initialFocusRef={field}
        returnFocusRef={button}
        size="md"
      >
        <TextareaInput
          ref={field}
          aria-label="Texto do dever de casa para WhatsApp"
          value={message ?? ''}
          readOnly
          rows={10}
          onFocus={(event) => event.currentTarget.select()}
        />
      </Dialog>
    </>
  )
}
