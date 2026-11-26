import type { VideoExerciseProps } from './VideoExercise.types'
export interface VideoExerciseYouTubeProps {
  clip: NonNullable<VideoExerciseProps['youtube']>
  playbackControls: NonNullable<VideoExerciseProps['playbackControls']>
  active: boolean
  preload: boolean
  labels: {
    replay: string
    loop: string
    loading: string
    unavailable: string
    openSource: string
  }
}
