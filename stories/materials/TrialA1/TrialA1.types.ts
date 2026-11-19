import type { LessonProps } from '../shared/Lesson.types'
export interface TrialA1LessonProps extends LessonProps {
  levelLabel?: string
}

export interface TrialA1PictureTalkProps {
  onPlay?: (id: string) => void
  playingId?: string
  active?: boolean
}
