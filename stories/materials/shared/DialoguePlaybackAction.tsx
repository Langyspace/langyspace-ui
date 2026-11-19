import { IconButton } from '../../../src/components/IconButton/IconButton'
import type { DialoguePlaybackActionProps } from './DialoguePlaybackAction.types'

export function DialoguePlaybackAction({
  context,
  status,
  disabled,
  describedBy,
  onClick,
}: DialoguePlaybackActionProps) {
  const action =
    status === 'playing'
      ? 'Pausar diálogo'
      : status === 'paused'
        ? 'Continuar diálogo'
        : status === 'loading'
          ? 'Cancelar áudio'
          : status === 'ended'
            ? 'Ouvir novamente'
            : status === 'error'
              ? 'Tentar novamente'
              : 'Ouvir diálogo'
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
