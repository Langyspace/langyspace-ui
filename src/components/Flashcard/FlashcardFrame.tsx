import * as Styled from './FlashcardFrame.styles'

import type { ComponentPropsWithRef } from 'react'

export type FlashcardFrameProps = ComponentPropsWithRef<'section'>

export function FlashcardFrame(props: FlashcardFrameProps) {
  return <Styled.Root {...props} />
}
