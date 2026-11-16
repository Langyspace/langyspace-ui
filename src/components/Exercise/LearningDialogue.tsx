import { Avatar } from '../Avatar/Avatar'
import { IconButton } from '../IconButton/IconButton'
import * as Styled from './LearningDialogue.styles'
import type { LearningDialogueProps } from './LearningDialogue.types'
export function LearningDialogue({
  lines,
  translatedIds,
  playingId,
  onTranslate,
  onPlay,
  ...props
}: LearningDialogueProps) {
  return (
    <Styled.Dialogue {...props}>
      {lines.map((line) => (
        <Styled.DialogueLine key={line.id} $side={line.side}>
          <Styled.Speaker>
            <Avatar
              size="sm"
              imageUrl={line.avatarUrl}
              initials={line.speaker.slice(0, 2)}
            />
            <small>{line.speaker}</small>
          </Styled.Speaker>
          <Styled.Speech $playing={playingId === line.id}>
            {onTranslate && line.translation ? (
              <Styled.Translate
                type="button"
                onClick={() => {
                  onTranslate(line.id)
                }}
                aria-expanded={translatedIds?.includes(line.id) ?? false}
              >
                {line.content}
              </Styled.Translate>
            ) : (
              <div>{line.content}</div>
            )}
            {(translatedIds?.includes(line.id) ?? false) ? (
              <Styled.Translation>{line.translation}</Styled.Translation>
            ) : null}
            {onPlay && line.audioLabel ? (
              <IconButton
                size="sm"
                variant="subtle"
                aria-label={line.audioLabel}
                aria-pressed={playingId === line.id}
                onClick={() => {
                  onPlay(line.id)
                }}
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
