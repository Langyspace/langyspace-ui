import type { ComponentPropsWithRef } from 'react'
import type { PictureRegion } from '../../internal/PictureImage.types'

export interface PictureStripItem {
  id: string
  src: string
  alt: string
  caption: string
  region?: PictureRegion
  /** Contextual image evidence, such as an official flag, over the picture. */
  imageBadge?: { src: string; alt: string }
}
export interface PictureStripProps extends ComponentPropsWithRef<'section'> {
  items: readonly PictureStripItem[]
}
