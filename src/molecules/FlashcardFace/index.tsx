import { useContext } from 'react'
import { FlashcardFlipContext } from '../../internal/FlashcardFlipContext'
import * as Styled from './styles'
import type { FlashcardFaceProps } from './types'
export function FlashcardFace({
  side = 'front',
  ...props
}: FlashcardFaceProps) {
  const flipped = useContext(FlashcardFlipContext)
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
export type { FlashcardFaceProps } from './types'
