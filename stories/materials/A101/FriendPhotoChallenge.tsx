import { useEffect, useRef, useState } from 'react'
import { MobileFrame } from '../../../src/components/Device/MobileFrame'
import { countryFeelingPeople } from './countryFeelingPeople'
import frame from './assets/handheld-phone118.webp'
import * as S from './FriendPhotoChallenge.styles'
import type { FriendPhotoChallengeProps } from './FriendPhotoChallenge.types'

const illustration = {
  src: frame,
  alt: 'Your point of view: one hand holding a phone with your friend’s photo',
  aspectRatio: 2 / 3,
  screen: { x: 19.34, y: 10.03, width: 52.34, height: 63.74 },
}
const draw = () => Math.floor(Math.random() * countryFeelingPeople.length)

export function FriendPhotoChallenge({
  active,
  personId,
}: FriendPhotoChallengeProps) {
  const [index, setIndex] = useState<number | undefined>(() =>
    active && !personId ? draw() : undefined,
  )
  const wasActive = useRef(active)
  useEffect(() => {
    if (active && !wasActive.current && !personId) setIndex(draw())
    wasActive.current = active
  }, [active, personId])
  const person = personId
    ? countryFeelingPeople.find((p) => p.id === personId)
    : index === undefined
      ? undefined
      : countryFeelingPeople[index]
  return (
    <MobileFrame illustration={illustration} aria-label="Your friend’s photo">
      <S.Photo data-friend-photo={person?.id}>
        {person ? (
          <>
            <S.Portrait src={person.src} alt={person.alt} />
            <S.Flag src={person.imageBadge.src} alt={person.imageBadge.alt} />
            <S.Name>{person.caption}</S.Name>
          </>
        ) : null}
      </S.Photo>
    </MobileFrame>
  )
}
