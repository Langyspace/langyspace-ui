import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface ImageSortItem {
  id: string
  label: string
  imageUrl: string
  imageAlt?: string
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
  /** Consumer-owned speaking support, placed beneath the entire board. */
  footer?: ReactNode
}
