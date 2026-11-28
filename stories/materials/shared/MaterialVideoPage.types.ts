import type { VideoExerciseProps } from '../../../src/components/InteractiveMaterial/VideoExercise.types'
import type { PromptExerciseProps } from './LessonExercises.types'

export interface MaterialVideoPageContent {
  title: string
  instruction: string
  video: NonNullable<VideoExerciseProps['youtube']>
  items: PromptExerciseProps['items']
}

export interface MaterialVideoPageProps {
  content: MaterialVideoPageContent
  active: boolean
  preload?: boolean
}
