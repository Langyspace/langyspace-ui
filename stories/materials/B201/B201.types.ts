import type { SpeechProps } from '../shared/Lesson.types'
export interface WarmUpProps extends SpeechProps {
  index: number
}
export interface ListeningProps {
  active: boolean
}
export interface WordTableProps extends SpeechProps {
  grammar?: boolean
}
