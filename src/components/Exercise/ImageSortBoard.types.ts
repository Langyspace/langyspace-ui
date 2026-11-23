import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { PictureRegion } from '../../internal/PictureImage.types'

export interface ImageSortItem {
  id: string
  label: string
  imageUrl: string
  imageAlt?: string
  imageRegion?: PictureRegion
}
export interface ImageSortCategory {
  id: string
  label: string
}
export interface ImageSortBoardProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'onSelect' | 'children'
> {
  items: readonly ImageSortItem[]
  categories: readonly ImageSortCategory[]
  assignments: Readonly<Record<string, string | undefined>>
  selectedId?: string
  onSelect: (itemId: string) => void
  onAssign: (itemId: string, categoryId: string | undefined) => void
  unassignedLabel?: string
  instructions?: string
  emptyLabel?: string
  /** A picture bank above numbered stages; default categorisation is unchanged. */
  layout?: 'categories' | 'sequence'
  /** Consumer-owned speaking support, placed beneath the entire board. */
  footer?: ReactNode
}
