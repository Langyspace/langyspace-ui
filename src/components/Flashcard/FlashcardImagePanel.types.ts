import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { PictureRegion } from '../../internal/PictureImage.types'

export interface FlashcardImagePanelProps extends ComponentPropsWithRef<'div'> {
  emoji?: ReactNode
  /** Reuse one unchanged contextual picture atlas across related cards. */
  image?: { src: string; alt: string; region?: PictureRegion }
}
