import { useId, useRef, useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { Button } from '../Button/Button'
import { playFeedbackSound } from '../../internal/feedbackSounds'
import { useVoiceMessageAudio } from './useVoiceMessageAudio'
import * as Styled from './VoiceMessageExercise.styles'
import type {
  RecordingProps,
  TranscriptOverride,
} from './VoiceMessageRecording.types'

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
  transcriptToggle,
  followUpStarted,
  id,
  onPlaybackStart,
}: RecordingProps) {
  const playRef = useRef<HTMLButtonElement>(null)
  const [transcriptOverride, setTranscriptOverride] =
    useState<TranscriptOverride>()
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
  const automaticReveal = transcriptUnlocked && !manualTranscript
  // A manual hide before the threshold never cancels the scheduled automatic reveal.
  // Once it has opened automatically, a teacher's Hide remains in effect on later plays.
  const transcriptVisible =
    transcriptOverride &&
    !(automaticReveal && transcriptOverride.beforeAutomaticReveal)
      ? transcriptOverride.visible
      : automaticReveal
  const canToggleTranscript =
    transcriptToggle || (manualTranscript && transcriptUnlocked)
  const transcriptAction = transcriptVisible
    ? labels.hideTranscript
    : labels.showTranscript
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
        preload={active ? 'auto' : 'none'}
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
      {canToggleTranscript ? (
        <Styled.TranscriptToggle
          aria-label={transcriptAction}
          aria-expanded={transcriptVisible}
          aria-pressed={transcriptVisible}
          aria-controls={`${id}-transcript`}
          disabled={!active}
          onClick={() => {
            setTranscriptOverride({
              visible: !transcriptVisible,
              beforeAutomaticReveal: !automaticReveal,
            })
            playFeedbackSound('hint')
          }}
        >
          {labels.transcript}
        </Styled.TranscriptToggle>
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
  transcriptToggle,
  onPlaybackStart,
}: Pick<
  RecordingProps,
  | 'audio'
  | 'contact'
  | 'active'
  | 'labels'
  | 'transcriptReveal'
  | 'transcriptToggle'
  | 'onPlaybackStart'
>) {
  const id = useId()
  const media = useVoiceMessageAudio(active)
  return (
    <VoiceMessageRecording
      audio={audio}
      contact={contact}
      active={active}
      media={media}
      labels={labels}
      transcriptReveal={transcriptReveal}
      transcriptToggle={transcriptToggle}
      followUpStarted={media.playCount >= 2}
      id={id}
      onPlaybackStart={onPlaybackStart}
    />
  )
}
