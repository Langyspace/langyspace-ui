import * as Styled from './FlashcardImagePanel.styles'
import type { FlashcardImagePanelProps } from './FlashcardImagePanel.types'
import { PictureImage } from '../../internal/PictureImage'

export function FlashcardImagePanel({
  emoji,
  image,
  children,
  ...props
}: FlashcardImagePanelProps) {
  return (
    <Styled.Root {...props}>
      {image ? (
        <Styled.Picture>
          <PictureImage {...image} />
        </Styled.Picture>
      ) : emoji != null ? (
        <Styled.Emoji aria-hidden="true">{emoji}</Styled.Emoji>
      ) : null}
      {children}
    </Styled.Root>
  )
}
