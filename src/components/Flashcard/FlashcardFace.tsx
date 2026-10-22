import { use } from 'react'
import { FlashcardFlipContext } from '../../internal/FlashcardFlipContext'
import * as Styled from './FlashcardFace.styles'
import type { FlashcardFaceProps } from './FlashcardFace.types'

export function FlashcardFace({
  side = 'front',
  ...props
}: FlashcardFaceProps) {
  const flipped = use(FlashcardFlipContext)
  const hidden =
    flipped !== undefined && (side === 'front' ? flipped : !flipped)

  return (
    <Styled.Root
      {...props}
      data-side={side}
      data-ui-flashcard-face={side}
      inert={hidden || props.inert}
      aria-hidden={hidden || props['aria-hidden']}
    />
  )
}
