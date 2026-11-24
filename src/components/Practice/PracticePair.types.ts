import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface PracticePairItem {
  id: string
  label: string
  content: ReactNode
}

export interface PracticePairProps extends ComponentPropsWithRef<'div'> {
  items: readonly [PracticePairItem, PracticePairItem]
  /** Narrow screens show one full-size phone; switching can also stop consumer-owned audio. */
  activeId?: string
  onActiveIdChange?: (id: string) => void
  selectionLabel?: string
}
