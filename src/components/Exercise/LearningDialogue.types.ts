import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface LearningDialogueLine {
  id: string
  speaker: string
  avatarUrl?: string
  side: 'start' | 'end'
  content: ReactNode
  translation?: ReactNode
  audioLabel?: string
}
export interface LearningDialogueProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'onPlay'
> {
  lines: readonly LearningDialogueLine[]
  translatedIds?: readonly string[]
  playingId?: string
  onTranslate?: (id: string) => void
  onPlay?: (id: string) => void
}
