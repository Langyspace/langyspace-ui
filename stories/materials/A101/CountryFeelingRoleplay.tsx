import { PictureStrip } from '../../../src/components/Exercise/PictureStrip'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import type { CountryFeelingRoleplayProps } from './CountryFeelingRoleplay.types'
import { FriendPhotoChallenge } from './FriendPhotoChallenge'
import { countryFeelingPeople } from './countryFeelingPeople'

/** Shared gallery; participants choose privately and speak without operating the screen. */
export function CountryFeelingRoleplay({
  challenge = false,
  active = true,
  personId,
}: CountryFeelingRoleplayProps) {
  if (challenge)
    return <FriendPhotoChallenge active={active} personId={personId} />
  return (
    <Common.Stack>
      {!challenge ? (
        <Common.Row $justify="center" aria-label="Questions you can ask">
          {['How are you?', 'Where are you from?', 'Are you …?'].map(
            (question) => (
              <Common.Chip key={question}>{question}</Common.Chip>
            ),
          )}
        </Common.Row>
      ) : null}
      <PictureStrip
        items={countryFeelingPeople}
        aria-label="Six people: countries and feelings"
      />
    </Common.Stack>
  )
}
