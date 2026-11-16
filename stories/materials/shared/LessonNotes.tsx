import { useId, useRef, useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { Dialog } from '../../../src/components/Dialog/Dialog'
import { TextareaInput } from '../../../src/components/Form/TextareaInput'
import * as Common from '../../../src/components/Exercise/Material.shared.styles'

export function LessonNotes({ code }: { code: string }) {
  const id = useId()
  const trigger = useRef<HTMLButtonElement>(null)
  const input = useRef<HTMLTextAreaElement>(null)
  const key = `langy-material-notes-${code}`
  const [open, setOpen] = useState(false)
  const [localOnly, setLocalOnly] = useState(false)
  const [notes, setNotes] = useState(() => {
    try {
      return typeof window === 'undefined'
        ? ''
        : (window.localStorage.getItem(key) ?? '')
    } catch {
      return ''
    }
  })
  const update = (value: string) => {
    setNotes(value)
    try {
      window.localStorage.setItem(key, value)
      setLocalOnly(false)
    } catch {
      setLocalOnly(true)
    }
  }
  return (
    <>
      <Button
        ref={trigger}
        variant="secondary"
        size="sm"
        onClick={() => setOpen(true)}
      >
        Notes
      </Button>
      <Dialog
        open={open}
        title={`Notes · ${code}`}
        closeLabel="Fechar notas"
        onClose={() => setOpen(false)}
        dismissal="escape-and-backdrop"
        initialFocusRef={input}
        returnFocusRef={trigger}
        footer={
          <>
            <Button variant="text" onClick={() => update('')}>
              Clear
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Done
            </Button>
          </>
        }
      >
        <Common.Stack>
          <label htmlFor={id}>Anotações da aula</label>
          <TextareaInput
            ref={input}
            id={id}
            rows={9}
            value={notes}
            onChange={(event) => update(event.currentTarget.value)}
            placeholder="Palavras, dúvidas e exemplos da aula…"
          />
          <Common.Hint role="status">
            {localOnly
              ? 'Notas mantidas apenas nesta sessão.'
              : 'As notas ficam neste navegador, separadas por aula.'}
          </Common.Hint>
        </Common.Stack>
      </Dialog>
    </>
  )
}
