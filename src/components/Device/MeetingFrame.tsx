import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { SimulationIcon } from '../InteractiveMaterial/SimulationIcon'
import * as S from './MeetingFrame.styles'
import type { MeetingFrameProps } from './MeetingFrame.types'

/** Static meeting illustration; decorative chrome never accesses devices or simulates a live connection. */
export function MeetingFrame({
  main,
  inset,
  layout = 'spotlight',
  stageTone = 'dark',
  imageFit = 'contain',
  participants,
  activeParticipantId,
  caption,
  learnerCaption,
  sharedContent,
  sharedContentLabel,
  insetPresentation = 'avatar',
  onParticipantImageError,
  ...props
}: MeetingFrameProps) {
  const [failedParticipantImages, setFailedParticipantImages] = useState<
    readonly string[]
  >([])
  const spotlight =
    layout !== 'side-by-side' && (layout !== 'grid' || !participants?.length)
  const gridCaptionsOverlay =
    layout === 'grid' && Boolean(participants?.length) && !sharedContent
  const [failedMainImage, setFailedMainImage] = useState<string>()
  const [failedInsetImage, setFailedInsetImage] = useState<string>()
  return (
    <S.Root as="figure" aria-label="Video meeting" {...props}>
      {layout === 'grid' && participants?.length ? (
        <S.GroupStage $shared={Boolean(sharedContent)}>
          {sharedContent ? (
            <S.SharedScreen aria-label="Shared screen">
              <S.SharedScreenHeader>
                <SimulationIcon name="screen-share" />
                <span>{sharedContentLabel ?? 'Screen sharing'}</span>
              </S.SharedScreenHeader>
              <S.SharedScreenContent>
                <S.SharedApplication
                  role="group"
                  aria-label="Presented application"
                >
                  {sharedContent}
                </S.SharedApplication>
                <S.SharedCaptionStack>
                  {caption ? (
                    <S.StackSpeakerCaption aria-live="polite">
                      {caption}
                    </S.StackSpeakerCaption>
                  ) : null}
                  {learnerCaption ? (
                    <S.StackLearnerCaption aria-live="polite">
                      {learnerCaption}
                    </S.StackLearnerCaption>
                  ) : null}
                </S.SharedCaptionStack>
              </S.SharedScreenContent>
            </S.SharedScreen>
          ) : null}
          <S.ParticipantGrid $shared={Boolean(sharedContent)}>
            {participants.map((person) => (
              <S.ParticipantTile
                key={person.id}
                $tone={stageTone}
                $fit={sharedContent ? 'contain' : 'cover'}
                $active={activeParticipantId === person.id}
                data-participant-id={person.id}
                data-speaking={activeParticipantId === person.id || undefined}
              >
                {person.imageUrl &&
                !failedParticipantImages.includes(person.imageUrl) ? (
                  <img
                    src={person.imageUrl}
                    alt={person.imageAlt ?? person.name}
                    onError={() =>
                      setFailedParticipantImages((images) => [
                        ...images,
                        person.imageUrl!,
                      ])
                    }
                  />
                ) : (
                  <Avatar
                    size={sharedContent ? 'sm' : 'lg'}
                    initials={person.name.slice(0, 1)}
                  />
                )}
                <S.Name title={person.name}>{person.name}</S.Name>
              </S.ParticipantTile>
            ))}
          </S.ParticipantGrid>
          {gridCaptionsOverlay && (caption || learnerCaption) ? (
            <S.CaptionStack $hasInset={false}>
              {caption ? (
                <S.StackSpeakerCaption aria-live="polite">
                  {caption}
                </S.StackSpeakerCaption>
              ) : null}
              {learnerCaption ? (
                <S.StackLearnerCaption aria-live="polite">
                  {learnerCaption}
                </S.StackLearnerCaption>
              ) : null}
            </S.CaptionStack>
          ) : null}
        </S.GroupStage>
      ) : layout === 'side-by-side' ? (
        <S.SplitStage>
          {(
            [
              ['main', main],
              ['inset', inset],
            ] as const
          ).map(([position, person]) => (
            <S.Tile key={position} $tone={stageTone} $fit={imageFit}>
              {person.imageUrl &&
              person.imageUrl !==
                (position === 'main' ? failedMainImage : failedInsetImage) ? (
                <img
                  src={person.imageUrl}
                  alt={person.imageAlt ?? person.name}
                  onError={() => {
                    if (position === 'main') setFailedMainImage(person.imageUrl)
                    else setFailedInsetImage(person.imageUrl)
                    onParticipantImageError?.(position, person.imageUrl!)
                  }}
                />
              ) : (
                <Avatar size="xl" initials={person.name.slice(0, 1)} />
              )}
              <S.Name>{person.name}</S.Name>
            </S.Tile>
          ))}
        </S.SplitStage>
      ) : (
        <S.Stage $tone={stageTone} $fit={imageFit}>
          {main.imageUrl && main.imageUrl !== failedMainImage ? (
            <img
              src={main.imageUrl}
              alt={main.imageAlt ?? main.name}
              onError={() => {
                setFailedMainImage(main.imageUrl)
                onParticipantImageError?.('main', main.imageUrl!)
              }}
            />
          ) : (
            <Avatar size="xl" initials={main.name.slice(0, 1)} />
          )}
          <S.Name>{main.name}</S.Name>
          {learnerCaption ? (
            <S.CaptionStack>
              {caption ? (
                <S.StackSpeakerCaption aria-live="polite">
                  {caption}
                </S.StackSpeakerCaption>
              ) : null}
              <S.StackLearnerCaption aria-live="polite">
                {learnerCaption}
              </S.StackLearnerCaption>
            </S.CaptionStack>
          ) : caption ? (
            <S.OverlayCaption aria-live="polite">{caption}</S.OverlayCaption>
          ) : null}
          <S.Self
            $video={insetPresentation === 'video'}
            $fit={imageFit}
            $active={
              activeParticipantId !== undefined &&
              activeParticipantId === inset.id
            }
          >
            {insetPresentation === 'video' &&
            inset.imageUrl &&
            inset.imageUrl !== failedInsetImage ? (
              <img
                src={inset.imageUrl}
                alt={inset.imageAlt ?? inset.name}
                onError={() => {
                  setFailedInsetImage(inset.imageUrl)
                  onParticipantImageError?.('inset', inset.imageUrl!)
                }}
              />
            ) : (
              <Avatar
                size="sm"
                imageUrl={
                  insetPresentation === 'video' ? undefined : inset.imageUrl
                }
                initials={inset.name.slice(0, 1)}
                onImageError={(url) => onParticipantImageError?.('inset', url)}
              />
            )}
            <S.Name title={inset.name}>{inset.name}</S.Name>
          </S.Self>
        </S.Stage>
      )}
      {!spotlight && !gridCaptionsOverlay && !sharedContent ? (
        <>
          {caption ? <S.Caption aria-live="polite">{caption}</S.Caption> : null}
          {learnerCaption ? (
            <S.LearnerCaption aria-live="polite">
              {learnerCaption}
            </S.LearnerCaption>
          ) : null}
        </>
      ) : null}
      <S.Controls aria-hidden="true">
        <S.Control as="span">
          <SimulationIcon name="mic" />
        </S.Control>
        <S.Control as="span">
          <SimulationIcon name="camera" />
        </S.Control>
        <S.Control as="span" $end>
          <SimulationIcon name="hangup" />
        </S.Control>
      </S.Controls>
    </S.Root>
  )
}
