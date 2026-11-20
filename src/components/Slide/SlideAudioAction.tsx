import { IconButton } from '../IconButton/IconButton'
import type { SlideAudioActionProps } from './SlideAudioAction.types'

export function SlideAudioAction({
  context,
  status,
  disabled,
  describedBy,
  onClick,
}: SlideAudioActionProps) {
  const action =
    status === 'playing'
      ? 'Pause dialogue'
      : status === 'paused'
        ? 'Continue dialogue'
        : status === 'loading'
          ? 'Cancel audio'
          : status === 'ended'
            ? 'Play again'
            : status === 'error'
              ? 'Retry audio'
              : 'Play dialogue'
  const label = `${action}: ${context}`
  return (
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
}
