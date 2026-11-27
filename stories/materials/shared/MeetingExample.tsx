import { SimulationIcon } from '../../../src/components/InteractiveMaterial/SimulationIcon'
import { CharacterAvatar } from './CharacterPortraits.styles'
import * as S from './MeetingExample.styles'
import type { MeetingExampleProps } from './MeetingExample.types'

/** Static teaching example using the library's meeting frame; no device access. */
export function MeetingExample({ actor, observer }: MeetingExampleProps) {
  return (
    <S.Frame as="figure" aria-label="Example video meeting">
      <S.Stage>
        <img src={actor.imageUrl} alt={actor.imageAlt} />
        <S.Name>{actor.name}</S.Name>
        <S.Self>
          <CharacterAvatar
            size="sm"
            imageUrl={observer.avatarUrl}
            initials={observer.name.slice(0, 1)}
          />
          <span>{observer.name}</span>
        </S.Self>
      </S.Stage>
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
    </S.Frame>
  )
}
