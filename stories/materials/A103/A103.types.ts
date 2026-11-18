import type { LessonDeckProps } from '../shared/LessonDeck.types'

export type A103LessonProps = Omit<LessonDeckProps, 'lesson'>
export interface PhotoDialogueProps {
  part: 1 | 2
}
export interface JobWarmUpProps {
  index: 0 | 1
}
