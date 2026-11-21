import { useId } from 'react'
import { DialoguePlaybackAction } from './DialoguePlaybackAction'
import { conversationRecordings } from './conversationRecordings'
import { useRecordedConversationAudio } from './useRecordedConversationAudio'
import type {
  RecordedDialoguePlaybackProps,
  RecordedDialoguePlaybackControlProps,
} from './RecordedDialoguePlayback.types'
import * as S from './RecordedDialoguePlayback.styles'

export function RecordedDialoguePlayback({
  conversationId,
  active,
}: RecordedDialoguePlaybackProps) {
  const conversation = conversationRecordings[conversationId]
  const audio = useRecordedConversationAudio(active, conversation)
  return (
    <RecordedDialoguePlaybackControl
      conversationId={conversationId}
      active={active}
      playback={audio}
    />
  )
}

/** Controlled presentation: never creates a second media transport. */
export function RecordedDialoguePlaybackControl({
  conversationId,
  active,
  playback: audio,
}: RecordedDialoguePlaybackControlProps) {
  const id = useId()
  const conversation = conversationRecordings[conversationId]
  if (!audio.ready || !conversation) return null
  return (
    <S.Control
      data-recorded-conversation={conversationId}
      data-playback-state={audio.status}
    >
      <DialoguePlaybackAction
        context={conversation.title}
        status={audio.status}
        disabled={!active}
        describedBy={audio.error ? id : undefined}
        onClick={audio.toggle}
      />
      {audio.error ? (
        <S.Status id={id} role="status">
          {audio.error}
        </S.Status>
      ) : null}
    </S.Control>
  )
}
