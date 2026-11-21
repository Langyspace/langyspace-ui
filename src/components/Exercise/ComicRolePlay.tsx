import { Avatar } from '../Avatar/Avatar'
import { VocabularyControls } from './VocabularyControls'
import * as S from './ComicRolePlay.styles'
import type { ComicRolePlayProps } from './ComicRolePlay.types'

/** Image-led speaking prompts: blank balloons, then optional intent/model support. */
export function ComicRolePlay({
  panels,
  participants,
  guidance,
  onParticipantImageError,
  ...props
}: ComicRolePlayProps) {
  const turns = panels.flatMap((panel) => panel.turns)
  const hints = turns.filter((turn) => turn.hint != null)
  const models = turns.filter((turn) => turn.model != null)
  const nextHint = hints.find(
    (turn) =>
      !guidance?.hintedTurnIds.includes(turn.id) &&
      !guidance?.revealedTurnIds.includes(turn.id),
  )
  const nextModel = models.find(
    (turn) => !guidance?.revealedTurnIds.includes(turn.id),
  )
  const hasHints = Boolean(guidance?.hintedTurnIds.length)
  return (
    <S.Root {...props}>
      <S.Participants>
        {participants.map((person) => (
          <Avatar
            key={person.id}
            name={person.name}
            namePosition="beside"
            textTone="inherit"
            size="sm"
            initials={person.initials ?? person.name.slice(0, 1)}
            imageUrl={person.avatarUrl}
            onImageError={(url) => onParticipantImageError?.(person.id, url)}
          />
        ))}
      </S.Participants>
      <S.Panels aria-label="Conversation pictures">
        {panels.map((panel, index) => (
          <S.Panel key={panel.id} aria-label={`Picture ${index + 1}`}>
            <S.Turns>
              {panel.turns.map((turn) => {
                const person = participants.find(
                  (participant) => participant.id === turn.participantId,
                )
                const model = guidance?.revealedTurnIds.includes(turn.id)
                const hint = guidance?.hintedTurnIds.includes(turn.id)
                return (
                  <S.Balloon
                    key={turn.id}
                    role="group"
                    aria-label={`${person?.name ?? turn.participantId}, turn ${turns.indexOf(turn) + 1}`}
                    aria-live="polite"
                  >
                    {model ? turn.model : hint ? turn.hint : null}
                  </S.Balloon>
                )
              })}
            </S.Turns>
            <S.Image src={panel.imageUrl} alt={panel.imageAlt} />
          </S.Panel>
        ))}
      </S.Panels>
      {guidance ? (
        <S.Controls>
          <VocabularyControls
            density="compact"
            interaction="progressive"
            showInitial={hasHints}
            hintDisabled={!nextHint && !hasHints}
            showAll={!nextModel}
            labels={{
              hint: nextHint ? 'Show next speaking tip' : 'Hide speaking tips',
              showAll: 'Show next example',
              hideAll: 'Hide examples',
            }}
            onToggleInitial={() => guidance.onRevealHint(nextHint?.id)}
            onToggleAll={
              models.length
                ? () => guidance.onRevealModel(nextModel?.id)
                : undefined
            }
          />
        </S.Controls>
      ) : null}
    </S.Root>
  )
}
