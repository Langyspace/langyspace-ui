import { useId } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { conversationRecordings } from './conversationRecordings'
import { useRecordedConversationAudio } from './useRecordedConversationAudio'
import type { RecordedDialoguePlaybackProps } from './RecordedDialoguePlayback.types'
import * as S from './Lesson.styles'

export function RecordedDialoguePlayback({
  conversationId,
  active,
}: RecordedDialoguePlaybackProps) {
  const id = useId()
  const conversation = conversationRecordings[conversationId]
  const audio = useRecordedConversationAudio(active, conversation)
  if (!audio.ready || !conversation) return null
  const action =
    audio.status === 'playing'
      ? 'Pausar diálogo'
      : audio.status === 'paused'
        ? 'Continuar diálogo'
        : audio.status === 'loading'
          ? 'Cancelar áudio'
          : audio.status === 'ended'
            ? 'Ouvir novamente'
            : audio.status === 'error'
              ? 'Tentar novamente'
              : 'Ouvir diálogo'
  const label =
    audio.status === 'playing'
      ? 'Pausar'
      : audio.status === 'paused'
        ? 'Continuar'
        : audio.status === 'loading'
          ? 'Carregando…'
          : audio.status === 'error'
            ? 'Tentar novamente'
            : 'Ouvir'
  const icon = (
    <svg
      aria-hidden="true"
      focusable="false"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={audio.status === 'error' ? 'currentColor' : 'none'}
      stroke={audio.status === 'error' ? 'none' : 'currentColor'}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {audio.status === 'playing' ? (
        <>
          <rect x="14" y="3" width="5" height="18" rx="1" />
          <rect x="5" y="3" width="5" height="18" rx="1" />
        </>
      ) : audio.status === 'loading' ? (
        <path d="m18 6-12 12M6 6l12 12" />
      ) : audio.status === 'error' ? (
        <path d="M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z" />
      ) : (
        <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
      )}
    </svg>
  )
  return (
    <S.Row
      data-recorded-conversation={conversationId}
      data-playback-state={audio.status}
    >
      <Button
        variant="brand"
        size="md"
        iconStart={icon}
        disabled={!active}
        aria-label={`${action}: ${conversation.title}`}
        aria-busy={audio.status === 'loading' || undefined}
        aria-describedby={audio.error ? id : undefined}
        onClick={audio.toggle}
      >
        {label}
      </Button>
      {audio.error ? (
        <S.Hint id={id} role="status">
          {audio.error}
        </S.Hint>
      ) : null}
    </S.Row>
  )
}
