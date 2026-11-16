import { useId, useRef } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { Button } from '../Button/Button'
import { useVoiceMessageAudio } from './useVoiceMessageAudio'
import * as Styled from './VoiceMessageExercise.styles'
import type { VoiceMessageExerciseProps } from './VoiceMessageExercise.types'

const wave = [
  { id: 'a', height: 10 },
  { id: 'b', height: 26 },
  { id: 'c', height: 12 },
  { id: 'd', height: 27 },
  { id: 'e', height: 12 },
  { id: 'f', height: 22 },
  { id: 'g', height: 15 },
  { id: 'h', height: 14 },
  { id: 'i', height: 21 },
  { id: 'j', height: 9 },
  { id: 'k', height: 27 },
  { id: 'l', height: 9 },
  { id: 'm', height: 27 },
  { id: 'n', height: 8 },
  { id: 'o', height: 23 },
  { id: 'p', height: 9 },
  { id: 'q', height: 18 },
  { id: 'r', height: 18 },
  { id: 's', height: 16 },
  { id: 't', height: 24 },
  { id: 'u', height: 17 },
  { id: 'v', height: 25 },
  { id: 'w', height: 15 },
  { id: 'x', height: 22 },
]

function formatTime(seconds: number) {
  const value = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, '0')}`
}

function VoiceMessageContent({
  contact,
  greeting,
  audio,
  questions,
  onAnswer,
  active = true,
  footer,
  replyAction,
  labels: overrides,
  ...props
}: VoiceMessageExerciseProps) {
  const id = useId()
  const playRef = useRef<HTMLButtonElement>(null)
  const media = useVoiceMessageAudio(active)
  const labels = {
    play: 'Ouvir áudio',
    pause: 'Pausar áudio',
    loading: 'Carregando áudio',
    replay: 'Ouvir novamente',
    speed: 'Velocidade',
    transcript: 'Transcrição',
    transcriptHidden: 'Transcrição na segunda escuta',
    audioUnavailable: 'Áudio ainda não disponível.',
    audioError: 'Não foi possível reproduzir o áudio.',
    retry: 'Tentar novamente',
    correct: 'Correta',
    incorrect: 'Incorreta',
    questions: 'Perguntas sobre o áudio',
    conversation: 'Conversa',
    ...overrides,
  }
  const duration = media.duration || audio.duration || 0
  const progress = duration > 0 ? Math.min(1, media.elapsed / duration) : 0
  const playing =
    active && (media.status === 'playing' || media.status === 'loading')
  const loading = active && media.status === 'loading'
  const status =
    !active && (media.status === 'playing' || media.status === 'loading')
      ? 'paused'
      : media.status
  const transcriptVisible = media.playCount >= 2
  const playLabel = playing
    ? labels.pause
    : media.status === 'ended'
      ? labels.replay
      : labels.play

  return (
    <Styled.Root
      {...props}
      data-playback={status}
      data-listens={media.playCount}
    >
      <Styled.Layout>
        <Styled.Phone>
          <Styled.StatusBar aria-hidden="true">
            <span>9:41</span>
            <Styled.Island />
            <Styled.StatusIcons>
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="currentColor"
              >
                <rect x="0" y="8" width="3" height="4" rx="1" />
                <rect x="5" y="5" width="3" height="7" rx="1" />
                <rect x="10" y="2" width="3" height="10" rx="1" />
              </svg>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                stroke="currentColor"
              >
                <rect x="1" y="1" width="17" height="10" rx="2" />
                <path d="M20 4v4" />
                <rect
                  x="3"
                  y="3"
                  width="13"
                  height="6"
                  rx="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </Styled.StatusIcons>
          </Styled.StatusBar>
          <Styled.Contact>
            <Styled.Back aria-hidden="true">‹</Styled.Back>
            <Avatar
              imageUrl={contact.avatarUrl}
              initials={contact.name.slice(0, 2)}
              size="sm"
            />
            <Styled.ContactText>
              <strong>{contact.name}</strong>
              {contact.status ? <small>{contact.status}</small> : null}
            </Styled.ContactText>
          </Styled.Contact>
          <Styled.Conversation
            tabIndex={0}
            role="region"
            aria-label={`${labels.conversation}: ${contact.name}`}
          >
            {greeting ? (
              <Styled.Bubble>
                {greeting.text}
                <Styled.Time>{greeting.timestamp}</Styled.Time>
              </Styled.Bubble>
            ) : null}
            <Styled.VoiceBubble>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption -- The named transcript region below unlocks on the second listen as explicitly requested for this listening exercise. */}
              <audio
                ref={media.audioRef}
                src={audio.src}
                preload="metadata"
                {...media.events}
              />
              <Styled.Player>
                <Styled.Play
                  ref={playRef}
                  aria-label={playLabel}
                  aria-busy={loading || undefined}
                  title={loading ? labels.loading : playLabel}
                  aria-controls={`${id}-transcript`}
                  aria-describedby={
                    transcriptVisible ? undefined : `${id}-transcript`
                  }
                  disabled={!audio.src || !active}
                  onClick={() => {
                    void media.toggle()
                  }}
                >
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {playing ? (
                      <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                    ) : (
                      <path d="M7 4v16l13-8z" />
                    )}
                  </svg>
                </Styled.Play>
                <Styled.Wave aria-hidden="true">
                  {wave.map(({ id: barId, height }, index) => (
                    <Styled.Bar
                      key={barId}
                      $height={height}
                      $played={progress > index / wave.length}
                    />
                  ))}
                </Styled.Wave>
                <Styled.Speed
                  aria-label={`${labels.speed}: ${media.speed}x`}
                  disabled={!audio.src || !active}
                  onClick={media.changeSpeed}
                >
                  {media.speed}x
                </Styled.Speed>
              </Styled.Player>
              <Styled.Meta>
                <span>
                  {formatTime(media.elapsed)} / {formatTime(duration)}
                </span>
                <time>{audio.timestamp}</time>
              </Styled.Meta>
              <Styled.Transcript
                $visible={transcriptVisible}
                id={`${id}-transcript`}
                aria-live="polite"
                role="region"
                aria-label={labels.transcript}
              >
                {transcriptVisible ? (
                  <p>{audio.transcript}</p>
                ) : (
                  <Styled.Hint>{labels.transcriptHidden}</Styled.Hint>
                )}
              </Styled.Transcript>
              {!audio.src ? (
                <Styled.Hint>{labels.audioUnavailable}</Styled.Hint>
              ) : null}
              {media.status === 'error' ? (
                <Styled.Error role="alert">
                  {labels.audioError}
                  <Button
                    disabled={!active}
                    variant="text-danger"
                    onClick={() => {
                      void media.toggle()
                      playRef.current?.focus()
                    }}
                  >
                    {labels.retry}
                  </Button>
                </Styled.Error>
              ) : null}
            </Styled.VoiceBubble>
          </Styled.Conversation>
          <Styled.Composer aria-hidden={replyAction ? undefined : true}>
            <Styled.MessagePlaceholder>Message</Styled.MessagePlaceholder>
            {replyAction ? (
              <Styled.Reply
                aria-label={replyAction.label}
                disabled={replyAction.disabled || !active}
                onClick={replyAction.onClick}
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V22h2v-3.1A7 7 0 0 0 19 12z" />
                </svg>
              </Styled.Reply>
            ) : (
              <Styled.Microphone aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V22h2v-3.1A7 7 0 0 0 19 12z" />
                </svg>
              </Styled.Microphone>
            )}
          </Styled.Composer>
          <Styled.HomeIndicator aria-hidden="true" />
        </Styled.Phone>
        <Styled.Side role="group" aria-label={labels.questions}>
          {questions.map((question, index) => (
            <Styled.Question
              key={question.id}
              aria-labelledby={`${id}-question-${index}`}
              disabled={question.disabled}
            >
              <Styled.QuestionText id={`${id}-question-${index}`}>
                {index + 1}. {question.prompt}
              </Styled.QuestionText>
              <Styled.Choices>
                {question.choices.map((choice) => (
                  <Styled.Choice
                    key={choice.id}
                    disabled={question.disabled}
                    $feedback={choice.feedback}
                    aria-pressed={question.value === choice.id}
                    aria-label={
                      choice.feedback
                        ? `${choice.label} — ${choice.feedback === 'correct' ? labels.correct : labels.incorrect}`
                        : undefined
                    }
                    onClick={() => {
                      onAnswer(question.id, choice.id)
                    }}
                  >
                    {choice.label}
                    {choice.feedback === 'correct'
                      ? ' ✓'
                      : choice.feedback === 'incorrect'
                        ? ' ×'
                        : ''}
                  </Styled.Choice>
                ))}
              </Styled.Choices>
              {question.feedback ? (
                <p data-answer-feedback="true" role="status">
                  {question.feedback}
                </p>
              ) : null}
            </Styled.Question>
          ))}
          {footer}
        </Styled.Side>
      </Styled.Layout>
    </Styled.Root>
  )
}

export function VoiceMessageExercise(props: VoiceMessageExerciseProps) {
  return (
    <VoiceMessageContent
      key={`${props.audio.id}:${props.audio.src ?? ''}`}
      {...props}
    />
  )
}
