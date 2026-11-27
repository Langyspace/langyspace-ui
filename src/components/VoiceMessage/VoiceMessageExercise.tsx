import { useId, useRef, useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { MessagePhoneFrame } from '../Device/MessagePhoneFrame'
import { Button } from '../Button/Button'
import { useVoiceMessageAudio } from './useVoiceMessageAudio'
import {
  VoiceMessageRecording,
  AdditionalVoiceMessage,
} from './VoiceMessageRecording'
import * as Styled from './VoiceMessageExercise.styles'
import type { VoiceMessageExerciseProps } from './VoiceMessageExercise.types'
import { playFeedbackSound } from '../../internal/feedbackSounds'
import { QuestionsTitle } from '../Slide/SlidePage.styles'

function VoiceMessageContent({
  contact,
  greeting,
  attachment,
  videoAttachment,
  audio,
  additionalAudios = [],
  questions,
  questionHeading,
  onAnswer,
  active = true,
  layout = 'fluid',
  columnAlignment,
  footer,
  replyAction,
  replayActionLabel,
  transcriptReveal = 'third-listen',
  transcriptToggle = transcriptReveal === 'third-listen',
  labels: overrides,
  ...props
}: VoiceMessageExerciseProps) {
  const [followUpStarted, setFollowUpStarted] = useState(false)
  const id = useId()
  const conversationRef = useRef<HTMLDivElement>(null)
  const media = useVoiceMessageAudio(active)
  const labels = {
    play: 'Ouvir áudio',
    pause: 'Pausar áudio',
    loading: 'Carregando áudio',
    replay: 'Ouvir novamente',
    speed: 'Velocidade',
    transcript: 'Transcrição',
    showTranscript: 'Mostrar transcrição',
    hideTranscript: 'Esconder transcrição',
    transcriptHidden:
      transcriptReveal === 'third-listen'
        ? 'Transcrição na terceira escuta'
        : 'Transcrição na segunda escuta',
    audioUnavailable: 'Áudio ainda não disponível.',
    audioError: 'Não foi possível reproduzir o áudio.',
    retry: 'Tentar novamente',
    correct: 'Correta',
    incorrect: 'Incorreta',
    questions: 'Perguntas sobre o áudio',
    conversation: 'Conversa',
    ...overrides,
  }
  const status =
    !active && (media.status === 'playing' || media.status === 'loading')
      ? 'paused'
      : media.status
  const manualTranscript = transcriptReveal === 'manual-after-replay'
  const trackLabels = (index: number) =>
    additionalAudios.length
      ? {
          ...labels,
          play: `${labels.play} (${index + 1}/${additionalAudios.length + 1})`,
          pause: `${labels.pause} (${index + 1}/${additionalAudios.length + 1})`,
          replay: `${labels.replay} (${index + 1}/${additionalAudios.length + 1})`,
          transcript: `${labels.transcript} (${index + 1}/${additionalAudios.length + 1})`,
          showTranscript: `${labels.showTranscript} (${index + 1}/${additionalAudios.length + 1})`,
          hideTranscript: `${labels.hideTranscript} (${index + 1}/${additionalAudios.length + 1})`,
          speed: `${labels.speed} (${index + 1}/${additionalAudios.length + 1})`,
        }
      : labels
  const pauseSiblings = (current: HTMLAudioElement) => {
    conversationRef.current?.querySelectorAll('audio').forEach((element) => {
      if (element !== current) element.pause()
    })
  }

  return (
    <Styled.Root
      {...props}
      data-playback={status}
      data-listens={media.playCount}
    >
      <Styled.Layout
        $balanced={layout === 'balanced'}
        $alignment={columnAlignment}
      >
        <MessagePhoneFrame
          aria-label={undefined}
          contact={
            <Avatar
              imageUrl={contact.avatarUrl}
              initials={contact.name.slice(0, 2)}
              name={contact.name}
              namePosition="beside"
              textTone="inherit"
              description={contact.status}
              size="sm"
            />
          }
          conversationProps={{
            ref: conversationRef,
            tabIndex: 0,
            role: 'region',
            'aria-label': `${labels.conversation}: ${contact.name}`,
          }}
          composerAction={
            replyAction ? (
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
            ) : undefined
          }
        >
          {greeting ? (
            <Styled.Bubble>
              {greeting.text}
              <Styled.Time>{greeting.timestamp}</Styled.Time>
            </Styled.Bubble>
          ) : null}
          {attachment ? (
            <Styled.PhotoBubble>
              <img src={attachment.src} alt={attachment.alt} />
              {attachment.timestamp ? (
                <Styled.Time>{attachment.timestamp}</Styled.Time>
              ) : null}
            </Styled.PhotoBubble>
          ) : null}
          {videoAttachment ? (
            <Styled.VideoPreview
              aria-label={videoAttachment.title}
              disabled={!active}
              onClick={() => {
                conversationRef.current
                  ?.querySelectorAll('audio')
                  .forEach((element) => element.pause())
                videoAttachment.onOpen()
              }}
            >
              <Styled.VideoThumbnail>
                {videoAttachment.imageUrl ? (
                  <img src={videoAttachment.imageUrl} alt="" loading="lazy" />
                ) : null}
                <Styled.VideoPreviewIcon aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </Styled.VideoPreviewIcon>
              </Styled.VideoThumbnail>
              <Styled.VideoCaption>
                <strong>{videoAttachment.title}</strong>
                {videoAttachment.sourceLabel ? (
                  <span>{videoAttachment.sourceLabel}</span>
                ) : null}
                {videoAttachment.timestamp ? (
                  <Styled.Time>{videoAttachment.timestamp}</Styled.Time>
                ) : null}
              </Styled.VideoCaption>
            </Styled.VideoPreview>
          ) : null}
          <VoiceMessageRecording
            audio={audio}
            contact={contact}
            active={active}
            media={media}
            labels={trackLabels(0)}
            transcriptReveal={transcriptReveal}
            transcriptToggle={transcriptToggle}
            followUpStarted={followUpStarted}
            id={id}
            onPlaybackStart={pauseSiblings}
          />
          {additionalAudios.map((recording, index) => (
            <AdditionalVoiceMessage
              key={`${recording.id}:${recording.src ?? ''}`}
              audio={recording}
              contact={contact}
              active={active}
              labels={trackLabels(index + 1)}
              transcriptReveal={transcriptReveal}
              transcriptToggle={transcriptToggle}
              onPlaybackStart={pauseSiblings}
            />
          ))}
        </MessagePhoneFrame>
        <Styled.Side
          $stretch={columnAlignment === 'stretch'}
          role="group"
          aria-label={labels.questions}
        >
          {questionHeading ?? (
            <QuestionsTitle>{labels.questions}</QuestionsTitle>
          )}
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
                      playFeedbackSound(choice.feedbackOutcome ?? 'question')
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
          {replayActionLabel &&
          transcriptReveal !== 'third-listen' &&
          (manualTranscript ? !followUpStarted : media.playCount < 2) ? (
            <Button
              variant="secondary"
              disabled={!active || media.status !== 'ended'}
              onClick={() => {
                setFollowUpStarted(true)
                void media.toggle()
              }}
            >
              {replayActionLabel}
            </Button>
          ) : null}
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
