import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface VideoChapter {
  id: string
  seconds: number
  label: string
}
export interface VideoExerciseProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'title'
> {
  title: ReactNode
  media: ReactNode
  page: 'watch' | 'discuss'
  onPageChange: (page: 'watch' | 'discuss') => void
  chapters?: readonly VideoChapter[]
  activeChapterId?: string
  onSeek?: (seconds: number) => void
  beforeWatch?: ReactNode
  children?: ReactNode
  labels?: Partial<{ watch: string; discuss: string; chapters: string }>
}
