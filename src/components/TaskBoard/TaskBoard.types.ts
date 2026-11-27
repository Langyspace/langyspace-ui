import type { ComponentPropsWithRef } from 'react'

export interface TaskBoardAssignee {
  name: string
  imageUrl?: string
}

export interface TaskBoardCard {
  id: string
  title: string
  assignee?: TaskBoardAssignee
}

export interface TaskBoardColumn {
  id: string
  title: string
  cards: readonly TaskBoardCard[]
}

/** Read-only work evidence; consumers own tasks, people and workflow. */
export interface TaskBoardProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'children'
> {
  columns: readonly TaskBoardColumn[]
}
