import { useContext } from 'react'
import { FlashcardFlipContext } from '../../internal/FlashcardFlipContext'
import * as Styled from './FlashcardFace.styles'

import type { ComponentPropsWithRef } from 'react'

export interface FlashcardFaceProps extends ComponentPropsWithRef<'div'> {
  side?: 'front' | 'back'
}

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
