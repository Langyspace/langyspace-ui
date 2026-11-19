import { IconButton } from '../IconButton/IconButton'
import * as Styled from './LearningDialogue.styles'
import type {
  LearningDialogueActionProps,
  LearningDialogueProps,
} from './LearningDialogue.types'

function DialogueAction({
  content,
  completed,
  label,
  expanded,
  pressed,
  onActivate,
}: LearningDialogueActionProps) {
  const text = (
    <>
      {content}
      {completed ? <span aria-hidden="true"> ✓</span> : null}
    </>
  )
  const accessibility = {
    'aria-label': label,
    'aria-expanded': expanded,
    'aria-pressed': pressed,
  }
  if (typeof content === 'string' || typeof content === 'number')
    return (
      <Styled.Translate type="button" {...accessibility} onClick={onActivate}>
        {text}
      </Styled.Translate>
    )
  return (
    <Styled.RichTranslate
      role="button"
      tabIndex={0}
      {...accessibility}
      onClick={(event) => {
        const control = (event.target as Element).closest?.(
          'button, a, input, select, textarea, [role="button"]',
        )
        if (control && control !== event.currentTarget) return
        onActivate()
      }}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onActivate()
        }
      }}
    >
      {text}
    </Styled.RichTranslate>
  )
}

export function LearningDialogue({
  lines,
  density = 'regular',
  translatedIds,
  playingId,
  onTranslate,
  onPlay,
  completedIds,
  onComplete,
  ...props
}: LearningDialogueProps) {
  return (
    <Styled.Dialogue {...props}>
      {lines.map((line) => (
        <Styled.DialogueLine key={line.id} $side={line.side}>
          <Styled.Speaker
            $compact={density === 'compact'}
            role={density === 'compact' ? 'img' : undefined}
            aria-label={density === 'compact' ? line.speaker : undefined}
          >
            <Styled.SpeakerAvatar
              size="sm"
              imageUrl={line.avatarUrl}
              initials={line.speaker.slice(0, 2)}
              $compact={density === 'compact'}
            />
            <small>{line.speaker}</small>
          </Styled.Speaker>
          <Styled.Speech
            $playing={playingId === line.id}
            $side={line.side}
            $completed={completedIds?.includes(line.id) ?? false}
            $hasAudio={Boolean(onPlay && line.audioLabel)}
          >
            <Styled.Message>
              {onComplete && line.actionLabel ? (
                <DialogueAction
                  content={line.content}
                  completed={completedIds?.includes(line.id)}
                  label={line.actionLabel}
                  pressed={completedIds?.includes(line.id) ?? false}
                  onActivate={() => onComplete(line.id)}
                />
              ) : onTranslate && line.translation ? (
                <DialogueAction
                  content={line.content}
                  expanded={translatedIds?.includes(line.id) ?? false}
                  onActivate={() => onTranslate(line.id)}
                />
              ) : (
                <div>{line.content}</div>
              )}
            </Styled.Message>
            {(translatedIds?.includes(line.id) ?? false) ? (
              <Styled.Translation>{line.translation}</Styled.Translation>
            ) : null}
            {onPlay && line.audioLabel ? (
              <IconButton
                size="sm"
                variant="subtle"
                aria-label={line.audioLabel}
                aria-pressed={playingId === line.id}
                onClick={() => onPlay(line.id)}
              >
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                  <path d="M16 9a5 5 0 0 1 0 6M19.364 18.364a9 9 0 0 0 0-12.728" />
                </svg>
              </IconButton>
            ) : null}
          </Styled.Speech>
        </Styled.DialogueLine>
      ))}
    </Styled.Dialogue>
  )
}
