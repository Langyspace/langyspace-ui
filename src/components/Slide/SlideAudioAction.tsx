import { IconButton } from '../IconButton/IconButton'
import type { SlideAudioActionProps } from './SlideAudioAction.types'
import * as Styled from './SlideAudioAction.styles'

export function SlideAudioAction({
  context,
  contentKind = 'dialogue',
  status,
  disabled,
  describedBy,
  onClick,
  onRestart,
}: SlideAudioActionProps) {
  const action =
    status === 'playing'
      ? `Pause ${contentKind}`
      : status === 'paused'
        ? `Continue ${contentKind}`
        : status === 'loading'
          ? 'Cancel audio'
          : status === 'ended'
            ? 'Play again'
            : status === 'error'
              ? 'Retry audio'
              : `Play ${contentKind}`
  const label = `${action}: ${context}`
  const playback = (
    <IconButton
      variant="brand"
      size="md"
      data-dialogue-playback-action="true"
      data-playback-state={status}
      disabled={disabled}
      aria-label={label}
      title={label}
      aria-pressed={status === 'playing'}
      aria-busy={status === 'loading' || undefined}
      aria-describedby={describedBy}
      onClick={onClick}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        {status === 'playing' ? (
          <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
        ) : status === 'loading' ? (
          <path
            d="m18 6-12 12M6 6l12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        ) : status === 'error' ? (
          <path d="M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z" />
        ) : (
          <path d="M7 4v16l13-8z" />
        )}
      </svg>
    </IconButton>
  )
  return onRestart ? (
    <Styled.Actions role="group" aria-label={`Audio controls: ${context}`}>
      {playback}
      <IconButton
        variant="neutral"
        size="md"
        disabled={disabled}
        aria-label={`Restart ${contentKind}: ${context}`}
        title={`Restart ${contentKind}: ${context}`}
        onClick={onRestart}
      >
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 5a7 7 0 1 1-6.6 9.3l1.9-.6A5 5 0 1 0 12 7H7.8l2.6 2.6L9 11 4 6l5-5 1.4 1.4L7.8 5H12Z" />
        </svg>
      </IconButton>
    </Styled.Actions>
  ) : (
    playback
  )
}
