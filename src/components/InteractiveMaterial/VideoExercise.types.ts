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
  media?: ReactNode
  /** Inline media pairs with the host's existing Questions column without stage tabs. */
  presentation?: 'staged' | 'inline'
  /** Optional bounded external source. Media and provider controls stay owned here. */
  youtube?: {
    videoId: string
    startSeconds: number
    endSeconds: number
    title: string
    credit?: string
  }
  /** Inactive lesson pages release the external player and stop playback. */
  active?: boolean
  /** Lessons can expose just restart while retaining bounded replay. */
  playbackControls?: 'replay-only' | 'replay-and-loop'
  /** Prepare a neighbouring page without autoplay; keep its ready player on entry. */
  preload?: boolean
  page?: 'watch' | 'discuss'
  onPageChange?: (page: 'watch' | 'discuss') => void
  chapters?: readonly VideoChapter[]
  activeChapterId?: string
  onSeek?: (seconds: number) => void
  beforeWatch?: ReactNode
  children?: ReactNode
  labels?: Partial<{
    watch: string
    discuss: string
    chapters: string
    replay: string
    loop: string
    loading: string
    unavailable: string
    openSource: string
  }>
}
