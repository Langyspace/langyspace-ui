import type { LessonDeckProps } from '../shared/LessonDeck.types'

export type A104LessonProps = Omit<LessonDeckProps, 'lesson'> & {
  studentPortalOrigin?: string
}
export interface RoutineWarmUpProps {
  index: 0 | 1 | 2
}
