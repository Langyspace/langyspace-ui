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
  onParticipantImageError,
  ...props
}: MeetingFrameProps) {
  const [failedMainImage, setFailedMainImage] = useState<string>()
  const [failedInsetImage, setFailedInsetImage] = useState<string>()
  return (
    <S.Root as="figure" aria-label="Video meeting" {...props}>
      {layout === 'side-by-side' ? (
        <S.SplitStage>
          {(
            [
              ['main', main],
              ['inset', inset],
            ] as const
          ).map(([position, person]) => (
            <S.Tile key={position}>
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
        <S.Stage>
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
          <S.Self>
            <Avatar
              size="sm"
              imageUrl={inset.imageUrl}
              initials={inset.name.slice(0, 1)}
              onImageError={(url) => onParticipantImageError?.('inset', url)}
            />
            <span>{inset.name}</span>
          </S.Self>
        </S.Stage>
      )}
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
