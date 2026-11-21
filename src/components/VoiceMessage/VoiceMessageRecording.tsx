import { useId, useRef, useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { Button } from '../Button/Button'
import { useVoiceMessageAudio } from './useVoiceMessageAudio'
import * as Styled from './VoiceMessageExercise.styles'
import type {
  VoiceMessageAudio,
  VoiceMessageExerciseProps,
  VoiceMessageLabels,
} from './VoiceMessageExercise.types'

interface RecordingProps {
  audio: VoiceMessageAudio
  contact: VoiceMessageExerciseProps['contact']
  active: boolean
  media: ReturnType<typeof useVoiceMessageAudio>
  labels: VoiceMessageLabels
  transcriptReveal: NonNullable<VoiceMessageExerciseProps['transcriptReveal']>
  followUpStarted: boolean
  showTranscript: boolean
  onToggleTranscript: () => void
  id: string
  onPlaybackStart?: (element: HTMLAudioElement) => void
}
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

/** One native recording bubble reused by single- and multi-message conversations. */
export function VoiceMessageRecording({
  audio,
  contact,
  active,
  media,
  labels,
  transcriptReveal,
  followUpStarted,
  showTranscript,
  onToggleTranscript,
  id,
  onPlaybackStart,
}: RecordingProps) {
  const playRef = useRef<HTMLButtonElement>(null)
  const duration = media.duration || audio.duration || 0
  const progress = duration > 0 ? Math.min(1, media.elapsed / duration) : 0
  const playing =
    active && (media.status === 'playing' || media.status === 'loading')
  const loading = active && media.status === 'loading'
  const status =
    !active && (media.status === 'playing' || media.status === 'loading')
      ? 'paused'
      : media.status
  const manualTranscript = transcriptReveal === 'manual-after-replay'
  const transcriptPass = transcriptReveal === 'third-listen' ? 3 : 2
  const transcriptUnlocked =
    media.playCount >= transcriptPass && (!manualTranscript || followUpStarted)
  const transcriptVisible =
    transcriptUnlocked && (!manualTranscript || showTranscript)
  const playLabel = playing
    ? labels.pause
    : media.status === 'ended'
      ? labels.replay
      : labels.play

  return (
    <Styled.VoiceBubble
      data-audio-id={audio.id}
      data-playback={status}
      data-listens={media.playCount}
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption -- The named transcript region below unlocks after the configured listening pass for this exercise. */}
      <audio
        ref={media.audioRef}
        src={audio.src}
        preload="auto"
        {...media.events}
        onPlay={(event) => onPlaybackStart?.(event.currentTarget)}
      />
      <Styled.Player>
        <Styled.Play
          ref={playRef}
          aria-label={playLabel}
          aria-busy={loading || undefined}
          title={loading ? labels.loading : playLabel}
          aria-controls={`${id}-transcript`}
          aria-describedby={transcriptVisible ? undefined : `${id}-transcript`}
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
        <Avatar
          imageUrl={contact.avatarUrl}
          initials={contact.name.slice(0, 2)}
          size="xs"
        />
      </Styled.Player>
      <Styled.Meta>
        <span>
          {formatTime(media.elapsed)} / {formatTime(duration)}
        </span>
        <time>{audio.timestamp}</time>
      </Styled.Meta>
      {manualTranscript && transcriptUnlocked ? (
        <Button
          size="sm"
          variant="secondary"
          aria-expanded={showTranscript}
          aria-controls={`${id}-transcript`}
          onClick={() => {
            onToggleTranscript()
          }}
        >
          {showTranscript ? labels.hideTranscript : labels.showTranscript}
        </Button>
      ) : null}
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
      {!audio.src ? <Styled.Hint>{labels.audioUnavailable}</Styled.Hint> : null}
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
  )
}

export function AdditionalVoiceMessage({
  audio,
  contact,
  active,
  labels,
  transcriptReveal,
  onPlaybackStart,
}: Pick<
  RecordingProps,
  | 'audio'
  | 'contact'
  | 'active'
  | 'labels'
  | 'transcriptReveal'
  | 'onPlaybackStart'
>) {
  const id = useId()
  const media = useVoiceMessageAudio(active)
  const [showTranscript, setShowTranscript] = useState(false)
  return (
    <VoiceMessageRecording
      audio={audio}
      contact={contact}
      active={active}
      media={media}
      labels={labels}
      transcriptReveal={transcriptReveal}
      followUpStarted={media.playCount >= 2}
      showTranscript={showTranscript}
      onToggleTranscript={() => setShowTranscript((old) => !old)}
      id={id}
      onPlaybackStart={onPlaybackStart}
    />
  )
}
