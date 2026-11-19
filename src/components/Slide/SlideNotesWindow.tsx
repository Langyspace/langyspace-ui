import { useEffect, useId, useRef } from 'react'
import * as Notes from './SlideNotes.styles'
import * as S from './SlideNotesWindow.styles'
import type { SlideNotesWindowProps } from './SlideNotesWindow.types'

export function SlideNotesWindow({
  value,
  onChange,
  onSave,
  onReload,
  onClose,
  contextLabel,
  statusLabel,
  error,
  readOnly = false,
  saving = false,
  canSave = false,
  choices,
  onChoose,
}: SlideNotesWindowProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const statusId = useId()
  useEffect(() => {
    if (!readOnly) inputRef.current?.focus()
  }, [readOnly])
  return (
    <S.Root aria-label="Anotações da aula">
      <Notes.Header>
        <Notes.Heading>Notes</Notes.Heading>
        <Notes.Action size="sm" variant="secondary" onClick={onClose}>
          Fechar
        </Notes.Action>
      </Notes.Header>
      {contextLabel ? <S.Context>{contextLabel}</S.Context> : null}
      {choices?.length ? (
        <S.Choices aria-label="Escolher aula">
          {choices.map((choice) => (
            <S.Choice
              key={choice.id}
              size="md"
              variant="secondary"
              onClick={() => onChoose?.(choice.id)}
            >
              {choice.label}
            </S.Choice>
          ))}
        </S.Choices>
      ) : null}
      <S.Editor
        ref={inputRef}
        aria-label="Anotação da aula"
        aria-describedby={error || statusLabel ? statusId : undefined}
        value={value}
        readOnly={readOnly}
        placeholder="Como o aluno foi? Onde travou? Próximos passos…"
        onChange={(event) => {
          onChange(event.target.value)
        }}
      />
      <S.Status id={statusId} role={error ? 'alert' : 'status'}>
        {error || statusLabel || ''}
      </S.Status>
      <S.Actions>
        <Notes.Action
          size="sm"
          variant="secondary"
          disabled={readOnly || saving || !value}
          onClick={() => {
            onChange('')
            inputRef.current?.focus()
          }}
        >
          Limpar
        </Notes.Action>
        {onReload ? (
          <Notes.Action
            size="sm"
            variant="secondary"
            disabled={saving}
            onClick={onReload}
          >
            Descartar rascunho e recarregar
          </Notes.Action>
        ) : null}
        {onSave ? (
          <S.Save
            size="md"
            variant="brand"
            disabled={readOnly || !canSave || saving}
            onClick={onSave}
          >
            {saving ? 'Salvando…' : 'Salvar'}
          </S.Save>
        ) : null}
      </S.Actions>
    </S.Root>
  )
}
