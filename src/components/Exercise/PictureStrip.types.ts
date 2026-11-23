import type { ComponentPropsWithRef } from 'react'
import type { PictureRegion } from '../../internal/PictureImage.types'

export interface PictureStripItem {
  id: string
  src: string
  alt: string
  caption: string
  region?: PictureRegion
}
export interface PictureStripProps extends ComponentPropsWithRef<'section'> {
  items: readonly PictureStripItem[]
}
